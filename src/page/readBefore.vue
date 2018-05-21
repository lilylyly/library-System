<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container cl">
        <div class="icon-site">
          <img class="icon-msg" src="../assets/site.png" alt="">
          当前位置：图书><span>{{bookname}}</span>
        </div>
        <div class="book-content">
          <h2 class="title">{{bookname}}</h2>
          <h2 class="list">目录</h2>
          <ul class="lists">
            <router-link tag="li" class="lists-item" v-for="(item, i) in currentList" :to="'/reading/'+item.id+'&'+bookid" :key="i" @click="handle()">{{item.title}}</router-link>
          </ul>
          <div class="pageination_align">
            <div class="pageination">
              <div class="pagination_page" @click="prevpage()">上一页</div>
              <div class="pagination_page" @click="nextpage()">下一页</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  .icon-site {
    height: 36px;
    width: 100%;
    background: #d69e6e9e;
    box-shadow: 3px 2px 4px #6b636375;
    color: #333;
    font-size: 14px;
  }

  span {
    font-weight: bold;
  }

  .icon-msg {
    width: 28px;
    height: 28px;
  }

  .book-content {
    padding: 0 10px;
    border-top: 1px solid transparent;
    background-color: #f7f4f340;
    box-shadow: 3px 2px 4px #6b636375;
    margin-top: 20px;
  }

  .title {
    text-align: center;
    padding: 20px;
    font-size: 28px;
    font-weight: bold;
    color: rgb(90,27,4);
  }

  .list {
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    background-color: #b1acac4f;
    padding-left: 20px;
    color: #444;
    margin: 10px 0;
  }

  .lists-item {
    padding: 5px;
    cursor: pointer;
  }

  .lists-item:hover {
    text-decoration: underline;
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

  export default {
    data () {
      return {
        booklists: [],
        currentList: [],
        pages: 0,
        page: 0,
        bookname: '',
        bookid: 0,
      }
    },
    methods: {
      nextpage: function () {
        var allPage = this.pages/10 - 2;
        console.log(allPage);
        if(this.page>allPage) {
          alert('已经是最后一页了');
        } else {
          this.page++;
          this.currentList = this.booklists.slice(this.page*10,this.page*10+10)
        }
      },
      prevpage: function () {
        if (this.page<1){
          alert('已经是第一页了');
        } else {
          this.page--;
          this.currentList = this.booklists.slice(this.page*10,this.page*10+10)
        }
      }
    },
    mounted: function () {
      this.bookid = this.$route.params.bookid;

      this.$http.get('/readbefore/' + this.bookid).then(
        response => {
          this.booklists = response.body;
          this.currentList = this.booklists.slice(0, 10);
          this.pages = this.booklists.length;
          this.bookname = this.booklists[0].bookName;
          console.log(this.booklists);
        }, response => {
          console.log(response)
        }
      )
    },
    components: {
      Mheader,
      Mfooter
    }
  }
</script>
