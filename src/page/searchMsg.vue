<template>
 <div>
   <mheader></mheader>
   <section class="content">
     <div class="container">
       <div class="icon-site">
         <img class="icon-msg" src="../assets/site.png" alt="">
         当前位置：搜索&nbsp;<a v-show="!flag">共有(<span>{{length}}</span>本关于《<span>{{value}}</span>》的图书)</a>
       </div>
       <ul class="list-books">
         <li class="book-item" v-show="!flag" v-for="(item, i) in bookDetails" :key="i">
           <h3 class="book-title">{{item.bookName}}</h3>
           <div class="book-cover">
             <img :src="item.cover" alt="">
           </div>
           <div class="book-msg">
             <h4 class="book-author">作者：<span>{{item.author}}</span></h4>
             <h4 class="book-type">分类：<span>{{item.type}}</span></h4>
             <p class="book-remark">
               <span>简介：</span>
               {{item.remark}}
             </p>
             <div class="tool">
               <router-link to="/">重新查找</router-link><span class="split">/</span><a @click="handleRead(item.id)">阅读本书</a>
             </div>
           </div>
           <div class="clear"></div>
         </li>
         <div class="none" v-show="flag">
           暂无该图书数据，敬请期待......
         </div>
       </ul>
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

  .none {
    height: 80px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #5a1b04;
    line-height: 80px;
  }

  span {
    font-weight: bold;
  }

  .icon-msg {
    width: 28px;
    height: 28px;
  }

  .list-books {
    padding: 0 10px;
    border-top: 1px solid transparent;
    background-color: #f7f4f340;
    box-shadow: 3px 2px 4px #6b636375;
    margin-top: 20px;
  }

  .book-item {
    padding: 10px 0;
    border-bottom: 1px dashed rgb(90,27,4);
  }

  .book-title {
    color: rgb(90,27,4);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .book-cover {
    width: 119px;
    height: 156px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #6b6b6b9e;
    background-color: #f5eaea75;
    float: left;
    margin-right: 20px;
  }

  .book-cover img {
    width: 113px;
    height: 150px;
    padding: 2px;
  }

  .book-msg {
    float: left;
    color: #1f1d1d;
  }

  .book-msg h4 {
    font-weight: bold;
    padding-bottom: 11px;
  }

  .book-remark {
    width: 812px;
    min-height: 80px;
    text-align: justify;
  }

  .tool a {
    font-size: 14px;
    float: right;
    cursor: pointer;
    color: #333;
  }

  .tool a:hover {
    text-decoration: underline;
  }

  span.split {
    margin: 0 4px;
    float: right;
    font-weight: normal;
    font-size: 14px;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import {getCookie} from '../common/js/cookie'

  export default {
    data () {
      return {
        bookDetails: {},
        value: '',
        flag: false,
        length: 0,
      }
    },
    components: {
      Mheader,
      Mfooter
    },
    methods: {
      init: function () {
        let bookname = this.$route.params.bookname;
        this.value = bookname;
        this.$http.get('/searchmsg/'+bookname).then(
          response => {
            if (response.body[0]) {
              this.bookDetails = response.body;
              this.length = this.bookDetails.length;
              return;
            }
            this.flag = true;
          },
          response => {
            console.log(response);
          }
        );
      },
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
    },
    mounted : function() {
      this.init();
    }
  }
</script>
