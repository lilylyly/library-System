<template>
  <div class="register-container">
    <h1>注册</h1>
    <div action="" id="registerForm">
      <div>
        <input type="text" name="username" v-validate="'required|min:3|alpha'" class="username" placeholder="您的用户名" v-model="username" :class="{'input': true, 'is-danger': errors.has('username') }"/>
        <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
      </div>
      <div>
        <input type="password" name="password" v-validate="'required|min:6|alpha_num'" class="password" placeholder="输入密码" oncontextmenu="return false" onpaste="return false" :class="{'input': true, 'is-danger': errors.has('password') }"/>
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
      </div>
      <div>
        <input type="password" name="confirm_password" v-validate="'confirmed:password'" class="confirm_password" placeholder="再次输入密码" oncontextmenu="return false" onpaste="return false" v-model="password" :class="{'input': true, 'is-danger': errors.has('confirm_password') }"/>
        <span v-show="errors.has('confirm_password')" class="help is-danger">{{ errors.first('confirm_password') }}</span>
      </div>
      <div>
        <input type="email" name="email"  v-validate="'required|email'" class="email" placeholder="输入邮箱地址" oncontextmenu="return false" onpaste="return false" v-model="email" :class="{'input': true, 'is-danger': errors.has('email') }"/>
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </div>
      <button id="submit"  @click="register">注 册</button>
    </div>
    <router-link to="/login">
      <button type="button" class="register-tis">已经有账号？</button>
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
  #registerForm {
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
    color: #FFFFFF;
  }
</style>

<script>
  import {validate} from '../common/js/jquery.validate.min'
  import {common} from '../common/js/common'

  export default {
    data () {
      return {
        username: '',
        password: '',
        email: ''
      }
    },
    methods: {
      register: function () {
//        var qs = require('qs');
        var obj = {
          username: this.username,
          password: this.password,
          email: this.email
        };
        this.$validator.validateAll().then((result) => {
          if (result) {
//            var xhr = new XMLHttpRequest();
//            var qs = require('qs');
//            xhr.open('POST', '/register');
//            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//            xhr.send(qs.stringify(obj));
//            xhr.onreadystatechange = function () {
//              if(xhr.readyState === 4 && xhr.status === 200){
//                var res = xhr.responseText;
//                if(res == -1) {
//                  alert('该用户名已存在')
//                } else {
//                  alert('注册成功');
//                  console.log(this);
////                  setTimeout(this  .$router.push('/login'), 1000);
//                }
//              }
//            };
            this.$http.post('/register', obj).then(
              response => {
                if(response.body == -1) {
                  alert('该用户名已存在')
                } else {
                  alert('注册成功');
                  setTimeout(this  .$router.push('/login'), 1000);
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
    mounted () {

    }
  }
</script>
