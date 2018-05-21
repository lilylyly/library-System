<template>
  <div>
    <mheader></mheader>
    <section class="content" @click="hideBox($event)">
      <div class="container">
        <div class="search-box center">
          <div class="search center">
            <input name="q" id="query" type="text" class="search-text" @keyup="handleKeyup()" v-model="value" placeholder="请输入搜索内容" autocomplete="false">
            <button name="su" id="su" type="submit" class="btn btn-large">
              <span class="icon-search" @click="handleSearch()">搜  索</span>
            </button>
            <ul class="search-msg">
              <li class="msg-item" v-for="(item, i) in result" :key="i" @click="searchItem(item)">{{item}}</li>
            </ul>
          </div>
          <div class="search-choose">
            <label>
              <input type="radio" name="field" value="title" checked="checked">
              <em>书名</em>
            </label>
            <label>
              <input type="radio" name="field" value="creatorSearch">
              <em>作者</em>
            </label>
            <label>
              <input type="radio" name="field" value="callNumberSearch">
              <em>索书号</em>
            </label>
          </div>
        </div>
        <div class="book-box center">
          <div class="type" v-for="(item, i) in type" :key="i">
            <h2 class="title">{{item}}</h2>
            <ul class="books">
              <li class="book-item" v-for="(book, i) in books" v-show="book.type == item" @mouseover="handleOver(book.id)" @click="handleRead(book.id)">
                <img class="book-cover" :src="book.cover" alt="图片加载失败">
                <el-rate v-model="book.ratings" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                <p class="remark" v-show="flag == book.id">{{book.remark}}</p>
              </li>
              <div class="clear"></div>
            </ul>
            <p class="more" @click="doMore($event)">查看更多》</p>
          </div>
        </div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  .search-box {
    width: 1024px;
  }
  .search-box .search {
    /*margin-top: 20px;*/
    width: 650px;
    position: relative;
  }

  .search-msg {
    position: absolute;
    z-index: 9999;
    width: 532px;
    cursor: pointer;
  }

  .msg-item {
    background: #fff;
    padding: 4px 5px;
  }

  .msg-item:hover{
    background: #ccc;
  }

  .search-box .search input.search-text {
    width: 520px;
    height: 40px;
    line-height: 36px;
    font-size: 18px;
    padding: 2px 5px;
    float: left;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    color: #000;
  }
  .search-box .search .btn {
    border-radius: 0 4px 4px 0;
    margin-left: -1px;
    vertical-align: top;
    padding: 10px 19px 11px 19px;
    font-size: 17px;
    color: #333333;
    background-color: #fcfcfc;
    outline: none;
    cursor: pointer;
    border: 1px solid #ccc;
  }
  .search-box .search .btn:hover {
    background-color: #eee;
  }
  .icon-search {
    background: url("http://202.115.193.41:8080/styles/opac/images/icon-search.png") left center no-repeat;
    padding-left: 28px;
    padding-right: 2px;
  }
  .search-choose {
    margin-left: 187px;
    margin-top: 10px;
  }
  .search-choose label {
    cursor: pointer;
    overflow: hidden;
    padding-right: 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    vertical-align: top;
  }
  .search-choose label input {
    cursor: pointer;
    float: left;
    vertical-align: middle;
    height: 20px;
  }
  .search-choose em {
    font-style: normal;
    color: #666;
    display: inline-block;
    padding-left: 3px;
  }
  .book-box {
    width: 1024px;
    margin: 48px auto 0;
    background: #d69e6e9e;;
    box-shadow: 3px 2px 4px #6b636375;
    color: #333;
    font-size: 14px;
  }

  .book-item {
    width: 145px;
    height: 180px;
    float: left;
    margin: 18px 29px;
    cursor: pointer;
    position: relative;
  }

  .remark {
    width: 153px;
    height: 169px;
    position: absolute;
    top: -15px;
    left: 115px;
    z-index: 999;
    background-color: #f1e3e3c2;
    padding: 10px;
    color: #333;
    line-height: 18px;
    overflow: hidden;
    transition: width 1s;
  }

  .book-cover{
    width: 113px;
    height: 150px;
    display: block;
    margin-left: 12px;
    box-shadow: 4px 4px 8px #6b63639c;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    color: #633622e8;
    padding: 10px 20px;
    background-color: #f5e2e2db;
  }

  .books {
    max-height: 440px;
    overflow: hidden;
  }

  .el-rate {
    background-color: #f1dec2cc;
    margin-top: 5px;
  }

  .more {
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    color: #633622e8;
  }

  .more:hover {
    color: #633622;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import {index} from '../common/js/index'
  import {getCookie} from '../common/js/cookie'

  export default {
    data () {
      return {
        value: '',
        result: [],
        books: [],
        type: ['玄幻', '都市', '职场', '网游', '玄幻', '历史', '修真', '其他'],
        index: 2,
        flag: false,
      }
    },
    methods: {
      handleSearch: function () {
        this.$router.push('/searchmsg/'+this.value);
      },
      searchItem: function (item) {
        this.$router.push('/searchmsg/'+item);
      },
      handleKeyup: function () {
        this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
          params: {
            wd: this.value
          },
          jsonp: 'cb'
        }).then(res => {
          this.result = res.data.s;
        })
      },
      hideBox: function (ev) {
        if (ev.target === $('.msg-item')) {
          return;
        }
        $('.msg-item').hide()
      },
      doMore: function (ev) {
        var h = 440 * this.index + 'px';
        $(ev.target).prev().css('max-height', h);
        this.index++
      },
      handleOver: function (id) {
        this.flag = id;
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
    mounted () {
      index();
      this.$http.get('/newindex').then(response => {
        this.books = response.body;
        console.log(this.books);
      }, response => {
        console.log(response);
      });
    },
    components: {
      Mheader,
      Mfooter
    }
  }
</script>
