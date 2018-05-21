<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container cl">
        <div class="icon-site">
          <img class="icon-msg" src="../assets/site.png" alt="">
          当前位置：图书><span>{{bookDetail.title}}</span>
        </div>
        <div class="book-content">
          <h2 class="title">{{bookDetail.title}}</h2>
          <ul class="lists">
            <li class="lists-item">  {{bookDetail.content}}</li>
          </ul>
          <div class="pageination_align">
            <div class="pageination">
              <div class="pagination_page" @click="prevpage()">上一页</div>
              <div class="pagination_page" @click="nextpage()">下一页</div>
            </div>
          </div>
        </div>
        <router-link :to="'/readbefore/'+currentBook" class="return-btn btn">回到目录</router-link>
        <div class="read-btn btn" @click="read()">有声阅读</div>
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
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
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

  .btn {
    display: block;
    width: 200px;
    height: 35px;
    position: fixed;
    left: 20px;
    background-color: #d69e6e9e;
    text-decoration: none;
    color: rgb(90,27,4);
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 3px 2px 4px #6b636375;
    cursor: pointer;
  }

  .return-btn {
    top: 223px;
  }

  .read-btn {
    top: 290px;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'

  export default {
    data () {
      return {
        bookDetail: [],
        currentPage: 0,
        currentBook: 0,
        url: '',
        i: 0
      }
    },
    methods: {
      initData: function () {
        let page = this.$route.params.page;
        var arr = this.$route.params.page.split('&');
        this.currentPage = arr[0];
        this.currentBook = arr[1];

        this.$http.get('/reading/' + page).then(
          response => {
            this.bookDetail = response.body[0];
          }, response => {
            console.log(response)
          }
        )
      },
      nextpage: function () {
        this.currentPage++;
        this.url = "/reading/"+this.currentPage+"&"+this.currentBook;
        this.$router.push(this.url);
        this.initData();
        $('body,html').animate({
          scrollTop: 0
        }, 1000)
      },
      prevpage: function () {
        if (this.currentPage>=0) {
          this.currentPage --;
          this.url = "/reading/"+this.currentPage+"&"+this.currentBook;
          this.$router.push(this.url);
          this.initData();
          $('body,html').animate({
            scrollTop: 0
          }, 1000);
        } else {
          alert('当前为第一章');
        }
      },
      read:function () {
        var tex = [];
        tex=$('.lists-item').html().split('。');
        console.log(tex[this.i]);
        new Audio(
          "http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex="+ tex[this.i]
        ).play();
        this.i++;
        var time = tex[this.i].length*270;
        console.log(time, this.i);
        if(this.i===tex.length-1){
          return;
        }
        setTimeout(function(){
          $('.read-btn').eq(0).click();
        },time);
      }
    },
    mounted: function () {
      this.initData();
    },
    components: {
      Mheader,
      Mfooter
    }
  }
</script>
