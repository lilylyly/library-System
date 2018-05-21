<template>
  <div class="login-container">
    <h1>登录</h1>
    <div id="loginForm">
      <div>
        <input type="text" name="username" v-validate="'required|alpha'" class="username" placeholder="用户名" autocomplete="off" v-model="username" :class="{'input': true, 'is-danger': errors.has('username') }"/>
        <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
      </div>
      <div>
        <input type="password" name="password"  v-validate="'required|alpha_num'" class="password" placeholder="密码" oncontextmenu="return false" onpaste="return false" v-model="password" :class="{'input': true, 'is-danger': errors.has('password') }"/>
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
      </div>
      <button id="submit" @click="login">登 陆</button>
    </div>
    <router-link to="/register">
      <button type="button" class="register-tis">没有账号？</button>
    </router-link>
    <router-link to="/">
      <button type="button" class="register-tis">返回首页？</button>
    </router-link>
    <div class="bg">
      <img class="bg-img" src="../assets/bg.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
  @import "../common/css/reset.css";
  @import "../common/css/style.css";
  #loginForm {
    position: relative;
    width: 305px;
    margin: 15px auto 0 auto;
    text-align: center
  }

  span.is-danger {
    display: block;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    border-radius: 0px 0px 5px 5px;
    width: 300px;
    height: 34px;
    border: 1px solid rgba(255, 255, 255, .15);
    line-height: 31px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    background: rgba(245, 26, 26, 0.81);
    margin: 0 auto;
    color: #FFFFFF;
    overflow: hidden;
  }
  h1 {
    color: #ffffff;
  }
</style>

<script>
  import {validate} from '../common/js/jquery.validate.min'
  import {common} from '../common/js/common'
  import {setCookie, getCookie} from '../common/js/cookie'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        var obj = {'username':this.username,'password':this.password};

        this.$validator.validateAll().then((result) => {
          if (result) {
//            var xhr = new XMLHttpRequest();
//            var qs = require('qs');
//            xhr.open('POST', '/login');
//            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//            xhr.send(qs.stringify(obj));
//            xhr.onreadystatechange = function () {
//              if(xhr.readyState === 4 && xhr.status === 200){
//                var res = xhr.responseText;
//                console.log(res);
//                if(res == -1) {
//                  alert('该用户名不存在');
//                } else if (res == 0) {
//                  alert('密码错误');
//                } else if (res == 1) {
//                  alert('我是管理员');
//                }else {
//                  alert('登录成功');
//                }
//              }
//            };
            this.$http.post('/login', obj).then(
              response => {
                if(response.body == -1) {
                  alert('该用户名不存在');
                } else if (response.body == 0) {
                  alert('密码错误');
                } else if (response.body == 1) {
                  alert('我是管理员');
                  setCookie('username', this.username, 1000*60);
                  setTimeout(this.$router.push('/admin/userlist'),1000);
                }else {
                  alert('登录成功');
                  setCookie('username', this.username, 1000*60);
                  setTimeout(this.$router.push('/'),1000);
                }
              }, response => {
                console.log(response);
              }
            );

            return;
          }
          alert('Correct them errors!');
        });
      }
    },
    mounted(){
//      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
//      if(getCookie('username')){
//        this.$router.push('/');
//      }
    }
  }
</script>
