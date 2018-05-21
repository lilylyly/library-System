<template>
  <div>
    <h1>页面出错，请检查你的url路径...</h1>
    <!--<div @click="download()">下载</div>-->
    <a href="../../static/1.txt" download="../../static/1.txt">下载</a>
    <div @click="save()">数据存入</div>
  </div>
</template>

<style>
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
</style>

<script>
  export default {
    methods: {
      download: function () {
        window.open('../../static/1.txt');
      },
      save: function () {
        var fso=new ActiveXObject(Scripting.FileSystemObject);
        var f=fso.createtextfile('../../static/1.txt',2,true);
        f.writeLine("我是周俐");
        console.log(111);
      }
    }
  }
</script>
