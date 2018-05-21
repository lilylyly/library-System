<template>
  <div>
    <mheader></mheader>
    <section class="content">
      <div class="container">
        <sidebar></sidebar>
        <div class="box">
          <table >
            <thead border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th class="index list1" width="40">序号</th>
              <th class="category list2" width="140">用户名</th>
              <th class="category list3" width="70">用户头像</th>
              <th width="150" class="list4">密码</th>
              <th width="210" class="list5">邮箱地址</th>
              <th width="220" class="list6">具体操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, i) in currentUsers" :key="i" :class="{even: i%2 !== 0}" v-show="user.username !== 'admin'">
              <td class="index">{{user.id}}</td>
              <td class="user-name">{{user.username}}</td>
              <td class="icon">
                <img :src="user.icon" alt="none" width="36" height="36">
              </td>
              <td class="password">{{user.password}}</td>
              <td class="email">{{user.email}}</td>
              <td class="butt">
                <router-link :to="'/admin/useredit/'+user.id" class="act">编辑</router-link>
                <a href="#" class="act" @click="deleteUser(user.id)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="pageination_align">
          <div class="pageination">
            <div class="pagination_page" @click="prevpage()">上一页</div>
            <div class="pagination_page" @click="nextpage()">下一页</div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>
    <mfooter></mfooter>
  </div>
</template>

<style scoped>
  @import "../../common/css/newbook.css";
  .icon img {
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
  }

  .user-name, .password{
    font-size: 16px;
    font-weight: bold;
  }

  .even {
    background-color: #f8f2e7;
  }

  .box {
    width: 818px;
    float: left;
    margin: 20px 0 0 0;
    border: 1px solid #c77e53f2;
    border-top: 3px solid #c77e53f2;
  }

  .pageination_align{
    text-align: center
  }

  .pageination {
    color: #48576a;
    font-size: 12px;
    display: inline-block;
    user-select: none;
    margin-top: 20px;
    margin-left: 148px;
  }

  .pagination_page {
    padding: 0 4px;
    border: 1px solid #d1dbe5;
    border-right: 0;
    background: #fff;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    float: left;
    margin-left: 20px;
  }

  .pagination_page:hover {
    color: #20a0ff;
  }
</style>

<script>
  import Mheader from '@/components/header.vue'
  import Mfooter from '@/components/footer.vue'
  import Sidebar from '@/components/Sidebar'

  export default {
    data () {
      return {
//        users: [{
//          userName: 'lily',
//          icon: 'https://dn-coding-net-production-file.qbox.me/b035c3d0-37d7-11e8-aea7-e9d6992c690d.png?download/cover1.png&e=1522830508&token=goE9CtaiT5YaIP6ZQ1nAafd_C1Z_H2gVP8AwuC-5:8BYD9d23--SBxEvnsALzrWbEbRs=',
//          password: '123456',
//          email: '1039925231@qq.com'
//        },
//          {
//            userName: 'lily',
//            icon: 'https://dn-coding-net-production-file.qbox.me/b035c3d0-37d7-11e8-aea7-e9d6992c690d.png?download/cover1.png&e=1522830508&token=goE9CtaiT5YaIP6ZQ1nAafd_C1Z_H2gVP8AwuC-5:8BYD9d23--SBxEvnsALzrWbEbRs=',
//            password: '123456',
//            email: '1039925231@qq.com'
//          },
//          {
//            userName: 'lily',
//            icon: 'https://dn-coding-net-production-file.qbox.me/b035c3d0-37d7-11e8-aea7-e9d6992c690d.png?download/cover1.png&e=1522830508&token=goE9CtaiT5YaIP6ZQ1nAafd_C1Z_H2gVP8AwuC-5:8BYD9d23--SBxEvnsALzrWbEbRs=',
//            password: '123456',
//            email: '1039925231@qq.com'
//          },
//          {
//            userName: 'lily',
//            icon: 'https://dn-coding-net-production-file.qbox.me/b035c3d0-37d7-11e8-aea7-e9d6992c690d.png?download/cover1.png&e=1522830508&token=goE9CtaiT5YaIP6ZQ1nAafd_C1Z_H2gVP8AwuC-5:8BYD9d23--SBxEvnsALzrWbEbRs=',
//            password: '123456',
//            email: '1039925231@qq.com'
//          },
//        ],
        users: [],
        currentUsers: [],
        page: 0,
      }
    },
    components: {
      Mheader,
      Mfooter,
      Sidebar
    },
    methods: {
      deleteUser: function (id) {
        var choice = confirm('此操作将永久删除该用户, 是否继续?');
        if (choice) {
          this.$http.post('/admin/deleteUser', {_id: id}).then(response => {
            alert('删除成功');
            this.updateData();
          }, response => {
            console.log(response);
          })
        } else {
          alert('已取消删除')
        }
      },
      //数据更新
      updateData: function () {
        this.$http.get('/admin/userlist').then(response => {
          this.users = response.body;
          this.currentUsers = this.users.slice(0,10);
        }, response => {
          console.log(response);
        });
      },
      nextpage: function () {
        if(this.page>2) {
          alert('已经是最后一页了');
        } else {
          this.page++;
          this.currentUsers = this.users.slice(this.page*10,this.page*10+10)
        }
      },
      prevpage: function () {
        if (this.page<1){
          alert('已经是第一页了');
        } else {
          this.page--;
          this.currentUsers = this.users.slice(this.page*10,this.page*10+10)
        }
      }
    },
    mounted () {
      this.$http.get('/admin/userlist').then(response => {
        this.users = response.body;
        this.currentUsers = this.users.slice(0,10);
      }, response => {
        console.log(response);
      });
    }
  }
</script>
