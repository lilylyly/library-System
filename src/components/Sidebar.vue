<template>
  <div class="left">
    <h2 class="title">管理选项</h2>
    <ul class="nav">
      <li class="nav-item" v-for="(item, i) in navs" :key="i" @click="changeNav(i)" :class="{act: i === actI}">
          {{item}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  @import "../common/css/reset.css";
  .left {
    width: 164px;
    float: left;
    margin: 20px 20px 0 0;
    border: 1px solid #c77e53f2;
    border-top: 3px solid #c77e53f2;
    background-color: #f9f7f5db;
  }
  .title {
    height: 64px;
    width: 100%;
    line-height: 64px;
    text-align: center;
    font-size: 20px;
    color: #333;
    background-color: #e6dccbf7;
    font-weight: bold;
  }
  .nav-item {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #ccc;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    background-position: 42px 17px;
    cursor: pointer;
  }
  .nav-item:hover {
    background-color: #e6dccbf7;
  }
  .act {
    background-color: #e6dccbf7;
  }
</style>

<script>
  export default {
    data () {
      return{
        navs: ['用户列表', '增加用户', '图书列表', '增加书目'],
        actI: 0,
      }
    },
    methods: {
      changeNav (i) {
        this.actI = i;
        switch (i) {
          case 0:
            this.$router.push('/admin/userlist');
            break;
          case 1:
            this.$router.push('/admin/useredit');
            break;
          case 2:
            this.$router.push('/admin/booklist');
            break;
          case 3:
            this.$router.push('/admin/bookedit');
            break;
          default:
            break;
        }
      }
    },
    mounted () {
      this.actI = this.$route.data
    },
  }
</script>
