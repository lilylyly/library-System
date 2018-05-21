<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container">
        <div class="booklist">
          <table>
            <thead border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th class="index list1" width="55">序号</th>
              <th class="category list2" width="230">分类</th>
              <th width="230" class="list3">书名</th>
              <th width="130" class="list4">作者</th>
              <th width="80" class="list5">评分</th>
              <th width="200" class="list6">喜欢人数</th>
              <th width="160" class="list7">具体操作</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(book, i) in currentBooks" :key="i" :class="{even: i%2 !== 0}">
                <td class="index">{{book.id}}</td>
                <td class="type">{{book.type}}</td>
                <td class="book-name">{{book.bookName}}</td>
                <td class="author">{{book.author}}</td>
                <td class="words">{{book.ratings}}</td>
                <td class="time">{{book.data}}</td>
                <td class="butt">
                  <span class="down-btn btn" @click="handleDownload(book.id)">下载</span>
                  <span class="read-btn btn" @click="handleRead(book.id)">阅读</span>
                  <a href="../../static/1.txt" download="../../static/1.txt" id="down"></a>
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
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  @import "../common/css/newbook.css";
  .even {
    background-color: #f8f2e7;
  }

  table {
    display: inline-block;
    height: 512px;
    overflow: hidden;
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
//  import pageination from '@/components/pageination.vue'
  import {getCookie} from '../common/js/cookie'


  export default {
    data () {
      return {
        books: [],
        page: 0,
        pages: 0,
        currentBooks: [],
      }
    },
    methods: {
      handleRead: function (id) {
        if (getCookie('username')) {
          var url = '';
          url = '/readbefore/'+id;
          this.$router.push(url);
        } else {
          alert('请先登录');
          this.$router.push('/login');
        }
      },
      handleDownload: function (id) {
        if (getCookie('username')) {
          this.$http.post('/download', {_id: id}).then(response => {
            console.log(111);
//            $('.down-btn').eq(0).click();
          }, response => {
            console.log(response);
          })
        } else {
          alert('你没有下载权限，请先登录');
          this.$router.push('/login');
        }
      },
      nextpage: function () {
        var allPage = this.pages/10 - 2;
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
    mounted () {
      // axios
      this.$http.get('/newbooks').then(response => {
        this.books = response.body;
        this.currentBooks = this.books.slice(0,10);
        this.pages = this.books.length;
      }, response => {
        console.log(response);
      });
    },
    components: {
      Mheader,
      Mfooter,
    }
  }
</script>
