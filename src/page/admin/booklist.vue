<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container">
        <sidebar></sidebar>
        <div class="box">
          <table>
            <thead border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th class="list1" width="40">序号</th>
              <th class="list2" width="90">封面图片</th>
              <th class="list3" width="160">分类</th>
              <th width="160" class="list4">书名</th>
              <th width="160" class="list5">作者</th>
              <th width="220" class="list6">具体操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, i) in currentBooks" :key="i" :class="{even: i%2 !== 0}">
              <td class="index">{{book.id}}</td>
              <td class="cover">
                <img :src="book.cover" alt="" width="36" height="36">
              </td>
              <td class="type">{{book.type}}</td>
              <td class="book-name">{{book.bookName}}</td>
              <td class="author">{{book.author}}</td>
              <td class="butt">
                <router-link :to="'/admin/bookedit/'+book.id" class="act">编辑</router-link>
                <a href="#" class="act" @click="deleteBook(book.id)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="pageination_align">
          <div class="pageination">
            <div class="pagination_page" @click="prevpage()">上一页</div>
            <div class="pagination_page" @click="nextpage()">下一页</div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  @import "../../common/css/newbook.css";
  .even {
    background-color: #f8f2e7;
  }

  .cover img {
    display: inline-block;
    vertical-align: middle;
  }

  .box {
    width: 818px;
    float: left;
    margin: 20px 0 0 0;
    border: 1px solid #c77e53f2;
    border-top: 3px solid #c77e53f2;
  }

  .pageination_align{
    text-align: center
  }

  .pageination {
    color: #48576a;
    font-size: 12px;
    display: inline-block;
    user-select: none;
    margin-top: 20px;
    margin-left: 148px;
  }

  .pagination_page {
    padding: 0 4px;
    border: 1px solid #d1dbe5;
    border-right: 0;
    background: #fff;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    float: left;
    margin-left: 20px;
  }

  .pagination_page:hover {
    color: #20a0ff;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import Sidebar from '@/components/Sidebar'

  export default {
    data () {
      return {
        books: [],
        page: 0,
        currentBooks: [],
        pages: 0
      }
    },
    mounted () {
      // axios
      this.$http.get('/admin/booklist').then(response => {
        this.books = response.body;
        this.currentBooks = this.books.slice(0,10);
        this.pages = this.books.length;
      }, response => {
        console.log(response);
      });
    },
    methods: {
      //编辑书目

      //删除书目
      deleteBook: function (id) {
        var choice = confirm('此操作将永久删除该文章, 是否继续?');
        if (choice) {
          this.$http.post('/admin/deleteBook', {_id: id}).then(response => {
            console.log(id);
            alert('删除成功');
            this.updateData();
          }, response => {
            console.log(response);
          })
        } else {
          alert('已取消删除')
        }
      },
      //数据更新
      updateData: function () {
        this.$http.get('/admin/booklist').then(response => {
          this.books = response.body;
          this.currentBooks = this.books.slice(0,10);
          this.pages = this.books.length;
        }, response => {
          console.log(response);
        });
      },
      nextpage: function () {
        var allPage = this.pages/10 - 2;
        console.log(allPage);
        if(this.page>allPage) {
          alert('已经是最后一页了');
        } else {
          this.page++;
          this.currentBooks = this.books.slice(this.page*10,this.page*10+10)
        }
      },
      prevpage: function () {
        if (this.page<1){
          alert('已经是第一页了');
        } else {
          this.page--;
          this.currentBooks = this.books.slice(this.page*10,this.page*10+10)
        }
      }
    },
    components: {
      Mheader,
      Mfooter,
      Sidebar
    }
  }
</script>
