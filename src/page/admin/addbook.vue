<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container">
        <sidebar></sidebar>
        <div class="box">
          <ul>
            <li>  书目名称: <input type="text" v-model="bookDetail.bookName" v-validate="'required|alpha'"/></li>
            <li>  书目封页:
              <img :src="bookDetail.cover" class="icon" alt="" v-show="bookDetail.cover">
              <div class="img-box">
                <input type="file" name="pic" id="icon" @change="addPic">
                选择图片
              </div>
            </li>
            <li>  作者姓名: <input type="text" v-model="bookDetail.author" v-validate="'required|alpha'"></li>
            <li>  书目分类: <input type="text" v-model="bookDetail.type" v-validate="'required|alpha'"></li>
            <li>
              作品简介:
              <textarea name="description" id="" cols="60" rows="8" v-model="bookDetail.remark" v-validate="'required|alpha'"></textarea>
            </li>
            <li>
              <button class="btn btn-default" @click="saveBook">提交</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  @import "../../common/css/newbook.css";
  .icon {
    width: 48px;
    height: 48px;
    display: inline-block;
    vertical-align: bottom;
  }

  .img-box {
    position: relative;
  }

  .img-box, #icon {
    vertical-align: bottom;
    display: inline-block;
    width: 72px;
    height: 24px;
    font-size: 12px;
    color: #635454;
    line-height: 24px;
    text-align: center;
    border: 1px solid #d2cbcb;
    background: #d6d4d4;
    cursor: pointer;
  }

  #icon {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    margin: 0;
  }

  .box ul {
    background-color: #f8f2e7;
    padding-left: 40px;
    padding-top: 16px;
  }

  .box li {
    font-size: 16px;
    font-weight: bold;
    margin: 6px 0;
    color: #666666;
    line-height: 36px;
  }

  .box li:last-child {
    margin-bottom: 0;
  }

  .box input {
    border: 1px solid #707070c4;
    min-height: 24px;
    color: #707070;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .box textarea {
    color: #707070;
  }

  #pic {
    border: 1px solid transparent;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #adadad;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #fff;
  }

  .btn:hover {
    background-color: #dddddd;
  }

  .box {
    width: 818px;
    float: left;
    margin: 20px 0 0 0;
    border: 1px solid #c77e53f2;
    border-top: 3px solid #c77e53f2;
    background-color: #f9f1e6;
  }

 .left-item:last-child {
    background-color: rgba(90,27,4,.6);
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import Sidebar from '@/components/Sidebar'

  export default {
    data () {
      return {
        bookDetail: {},
        bookname: '',
        author: '',
        type: '',
        remark: '',
      }
    },
    methods: {
      saveBook: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            var obj = this.bookDetail;
            var choice = confirm('提交后不可返回，是否确认提交？');
            if (choice) {
              this.$http.post('/admin/savebook',obj).then(
                response => {
                  if (response == '1') {
                    alert('修改成功');
                    return;
                  } else {
                    alert('增加成功');
                    return;
                  }
                }, response => {
                  console.log(response);
                })
            } else {
              alert('取消操作');
              return;
            }
          }
          alert('输入不为空');
        });
      },
      addPic: function (e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.bookDetail.cover = '../../../static/'+ files[0].name;
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      if (id) {
        this.$http.get('/admin/bookedit/' + id).then(
          response => {
            this.bookDetail = response.body[0];
          }, response => {
            console.log(response)
          }
        )
      } else {
        this.$http.get('/admin/bookedit').then(
          response => {
            this.bookDetail = response.body;
          }, response => {
            console.log(response);
          }
        )
      }
    },
    components: {
      Mheader,
      Mfooter,
      Sidebar
    }
  }
</script>
