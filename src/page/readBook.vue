<template>
  <section class="content">
    <a @click="read()" class="read-btn btn">有声阅读</a>
    <router-link to="/top" class="top-btn btn">查看排行</router-link>
    <router-link to="/" class="return-btn btn">返回首页</router-link>
    <span class="btn-prev" @click="prev()"></span>
    <span class="btn-next" @click="next()"></span>
    <div class="read-box">
      <div class="page page2">
        <div class="page-font">
          <h2 class="h2">第二部 我们仨失散了</h2>
          <p class="book-con">   有一晚，我做了一个梦。我和锺书一同散步，说说笑笑，走到了
            不知什么地方。太阳已经下山，黄昏薄暮，苍苍茫茫中，忽然锺
            书不见了。我四顾寻找，不见他的影踪。我喊他，没人应。只我
            一人，站在荒郊野地里，锺书不知到哪里去了。我大声呼喊，连
            名带姓地喊。喊声落在旷野里，好像给吞吃了似的，没留下一点
            依稀仿佛的音响。彻底的寂静，给沉沉夜色增添了分量，也加深
            了我的孤凄。往前看去，是一层深似一层的昏暗。我脚下是一条
            沙土路，旁边有林木，有潺潺流水，看不清楚溪流有多么宽广。
            向后看去，好像是连片的屋宇房舍，是有人烟的去处，但不见灯
            火，想必相离很远了。锺书自顾自先回家了吗？</p>
        </div>
        <div class="page-back">
          <p class="book-con">
            我也得回家呀。我正待寻觅归路，忽见一个老人拉着一辆空的黄包车，
            忙拦住他。他倒也停了车。可是我怎么也说不出要到哪里去，惶急中
            忽然醒了。锺书在我旁边的床上睡得正酣呢。<br/>
            &nbsp;&nbsp;我转侧了半夜等锺书醒来，就告诉他我做了一个梦，如
            此这般；于是埋怨他怎么一声不响地撇下我自顾自走了。锺书并不为
            我梦中的他辩护，只安慰我说：那是老人的梦，他也常做。<br/>
            &nbsp;&nbsp;是的，这类的梦我又做过多次，梦境不同而情味总相似。
            往往是我们两人从一个地方出来，他一晃眼不见了。我到处问询，无人
            理我。我或是来回寻找，走入一连串的死胡同，或独在昏暗的车站等车，
            等那末一班车，车也总不来。梦中凄凄惶惶，好像只要能找到他，就能
            一同回家。<br/>
            &nbsp;&nbsp;班车，车也总不来。梦中凄凄惶惶，好像只要能找到他，就能一同回家。
          </p>
        </div>
      </div>
      <div class="page page1">
        <div class="page-font">
          <h2 class="h2">第一部 我们俩老了</h2>
          <p class="book-con">&nbsp;&nbsp;有一晚，我做了一个梦。我和锺书一同散步，说说笑笑，走到了
            不知什么地方。太阳已经下山，黄昏薄暮，苍苍茫茫中，忽然锺
            书不见了。我四顾寻找，不见他的影踪。我喊他，没人应。只我
            一人，站在荒郊野地里，锺书不知到哪里去了。我大声呼喊，连
            名带姓地喊。喊声落在旷野里，好像给吞吃了似的，没留下一点
            依稀仿佛的音响。彻底的寂静，给沉沉夜色增添了分量，也加深
            了我的孤凄。往前看去，是一层深似一层的昏暗。我脚下是一条
            沙土路，旁边有林木，有潺潺流水，看不清楚溪流有多么宽广。
            向后看去，好像是连片的屋宇房舍，是有人烟的去处，但不见灯
            火，想必相离很远了。锺书自顾自先回家了吗？</p>
        </div>
        <div class="page-back">
          <p class="book-con">
            我也得回家呀。我正待寻觅归路，忽见一个老人拉着一辆空的黄包车，
            忙拦住他。他倒也停了车。可是我怎么也说不出要到哪里去，惶急中
            忽然醒了。锺书在我旁边的床上睡得正酣呢。<br/>
            &nbsp;&nbsp;我转侧了半夜等锺书醒来，就告诉他我做了一个梦，如
            此这般；于是埋怨他怎么一声不响地撇下我自顾自走了。锺书并不为
            我梦中的他辩护，只安慰我说：那是老人的梦，他也常做。<br/>
            &nbsp;&nbsp;是的，这类的梦我又做过多次，梦境不同而情味总相似。
            往往是我们两人从一个地方出来，他一晃眼不见了。我到处问询，无人
            理我。我或是来回寻找，走入一连串的死胡同，或独在昏暗的车站等车，
            等那末一班车，车也总不来。梦中凄凄惶惶，好像只要能找到他，就能
            一同回家。<br/>
            &nbsp;&nbsp;班车，车也总不来。梦中凄凄惶惶，好像只要能找到他，就能一同回家。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .content  {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/wood.jpg");
    background-size: 100% 100%;
    border-top: 1px solid transparent;
    box-sizing: border-box;
    position: relative;
  }

  .read-box {
    width: 900px;
    height: 600px;
    margin: 32px auto 0;
    background-image: url("../../static/bg.png");
    background-size: 100% 100%;
    position: relative;
    perspective: 800px;
  }

  .page {
    width: 45%;
    height: 83%;
    position: absolute;
    top: 24px;
    left: 448px;
    transform-style: preserve-3d;
    transform-origin: 0 0 0;
    perspective: 800px;
  }

  .page div {
    width: 325px;
    height: 478px;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    background-image: url("../../static/left_bg.jpg");
    background-size: 100% 100%;
    padding: 10px 40px;
  }

  .book-con {
    line-height: 22px;;
  }

  .page-back {
    transform: rotateY(180deg);
  }

  .h2 {
    text-align: center;
    padding: 20px 0;
  }

  .animate1 {
    animation: animate1 4s ease;
    animation-fill-mode : forwards;
  }

  .animate2 {
    animation: animate2 4s ease;
    animation-fill-mode : forwards;
  }

  @keyframes animate1 {
    from{
      transform: rotateY(0deg);
    }

    to{
      transform: rotateY(-180deg);
    }
  }

  @keyframes animate2 {
    from{
      transform: rotateY(0deg);
    }

    to{
      transform: rotateY(180deg);
    }
  }

  .btn {
    display: block;
    width: 200px;
    height: 35px;
    position: absolute;
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

  .btn:hover {
    background-color:  #c76e229e;
  }

  .return-btn {
    top: 140px;
  }

  .top-btn {
    top: 90px;
  }

  .read-btn {
    top: 40px;
  }

  span {
    width: 41px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
    background: url("../../static/buttons.png") no-repeat;
  }

  span.btn-prev {
    position: absolute;
    top: 48vh;
    left: 145px;
    background-position: 0 -40px;
  }

  span.btn-next {
    position: absolute;
    top: 48vh;
    left: 1165px;
    background-position: -41px -40px;
  }
</style>

<script>
  export default {
    data () {
      return {
        i: 1,
        flag: true,
      }
    },
    methods: {
      next: function () {
        $('.page').eq(this.i).addClass('animate1');
      },
      prev: function () {
        $('.page').eq(this.i).addClass('animate2');
      },
      read:function () {
        var tex = '';
        tex=$('.book-con').html();
        new Audio(
          "http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex="+tex
        ).play();
      }
    }
  }
</script>
