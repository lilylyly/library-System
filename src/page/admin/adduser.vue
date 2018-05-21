<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container">
        <sidebar></sidebar>
        <div class="box">
          <ul>
            <li>  用户名: <input type="text" name="title" v-model="userDetail.username" v-validate="'required|alpha'"></li>
            <li>  用户头像:
              <img :src="userDetail.icon" class="icon" alt="" v-show="userDetail.icon">
              <div class="img-box">
                <input type="file" name="pic" id="icon" @change="addPic">
                选择图片
              </div>
            </li>
            <li>  用户密码: <input type="text" name="price" v-model="userDetail.password" v-validate="'required|alpha_num'"></li>
            <li>  用户邮箱: <input type="text" name="fee" v-model="userDetail.email" v-validate="'required|email'"></li>
            <li>
              <button class="btn btn-default" @click="saveUser">提交</button>
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

  #icon {
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
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import Sidebar from '@/components/Sidebar'

  export default {
    data () {
      return {
        userDetail: {},
        flag: true,
        imgUrl: ''
      }
    },
    methods: {
      saveUser: function () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            var obj = this.userDetail;
            var choice = confirm('提交后不可返回，是否确认提交？');
            if (choice) {
              this.$http.post('/admin/saveuser',obj).then(
                response => {
                  if (response.body == '1') {
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
          } else {
            alert('输入不为空');
          }
        });

      },
      addPic: function (e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.userDetail.icon = '../../../static/'+ files[0].name;
      }
    },
    mounted: function () {
      let id = this.$route.params.id;
      if (id) {
        this.$http.get('/admin/useredit/' + id).then(
          response => {
            this.userDetail = response.body[0];
          }, response => {
            console.log(response)
          }
        )
      } else {
        this.$http.get('/admin/useredit').then(
          response => {
            this.userDetail = response.body
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
