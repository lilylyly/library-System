<template>
  <div class="header">
    <div class="header-img"></div>
    <div class="header-main">
      <div class="logo-img">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="header-content center cl">
        <ul class="header-left cl">
          <li class="left-item" v-for="(nav, i) in navs" :key="i" @click="changeTitle(nav.title)" :class="{on: isSelect === nav.title}">
            <router-link :to="nav.route">{{nav.title}}</router-link>
          </li>
        </ul>
        <div class="header-right">
          <router-link to="/login" class="login">{{isUser ? '欢迎'+isUser : '登录'}}</router-link>
          <a href="javascript:;" @click="quit">{{isUser ? '注销登录' : ''}}</a>
          <router-link to="/register" class="sign">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import "../common/css/reset.css";
  @import "../common/css/common.css";

  .header {
    background-color: rgb(233,157,97);
    height: 150px;
  }
  .header-img {
    width:100%;
    height: 150px;
    background-image: url("../assets/header.jpg");
  }
  .header-main {
    width:100%;
    box-shadow: inset 0 0 8px rgba(90,27,4,.9);
    margin-top: -62px;
    background-color: rgb(233,157,97);
    position: relative;
  }
  .logo-img {
    position: absolute;
    top: -80px;
    left: 150px;
  }
  .logo-img img {
    width: 250px;
    height: 80px;
  }
  .header-content {
    width: 1024px;
    height: 42px;
    line-height: 42px;
  }
  .header-main .header-left {
    float: left;
  }
  .header-main .header-right {
    float: right;
  }
  .header-main .header-right a:hover {
    text-decoration: underline;
  }
  .header-main .header-left .left-item {
    float: left;
    text-align: center;
  }
  .header-main a {
    color: rgb(90,27,4);
    font-size: 16px;
    font-weight: bold;
  }
  .header-main .header-left a {
    padding: 0 26px;
  }
  .header-main .header-right a {
    margin-left: 20px;
  }
  .header-main .header-left .left-item.on {
    background-color: rgba(90,27,4,.6);
  }
  .header-main .header-left .left-item:hover {
    background-color: rgba(90,27,4,.6);
  }
</style>

<script>
  import {getCookie, delCookie} from '../common/js/cookie'
  export default {
    data () {
      return {
        navs: [{
          title: '首页',
          route: '/',
        },
        {
          title: '排行榜',
          route: '/top',
        },
        {
          title: '书库',
          route: '/newbooks',
        },
        {
          title: '管理员后台',
          route: '/admin/userlist',
        }
        ],
        isSelect: '首页',
        isUser: ''
      }
    },
    methods: {
      changeTitle (title) {
        this.isSelect = title;
        switch (title) {
          case '首页':
            this.$router.push('/');
            break;
          case '排行榜':
            this.$router.push('/top');
            break;
          case '书库':
            this.$router.push('/newbooks');
            break;
          case '管理员后台':
            if (this.isUser == 'admin') {
              this.$router.push('/admin/userlist');
            } else {
              alert('你没有权限访问该页面');
              this.$router.push('/login')
            }
            break;
          default:
            break;
        }
      },
      quit: function () {
        delCookie('username');
        this.isUser = '';
        this.$router.push('/');
      }
    },
    mounted () {
      this.isSelect = this.$route.name;
      this.isUser = getCookie('username');
    },
  }
</script>
