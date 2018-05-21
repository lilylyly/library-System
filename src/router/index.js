import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Top from '@/page/Top'
import NewBooks from '@/page/NewBooks'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Userlist from '@/page/admin/userlists'
import Useredit from '@/page/admin/adduser'
import Booklist from '@/page/admin/booklist'
import Bookedit from '@/page/admin/addbook'
import Searchmsg from '@/page/searchMsg'
import Readbefore from '@/page/readBefore'
import Readbook from '@/page/readBook'
import Reading from '@/page/reading'
import Newindex from '@/page/NewIndex'
import Error from '@/page/error'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Newindex
    },
    {
      path: '/newindex',
      name: '首页',
      component: Index
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/top',
      name: '排行榜',
      component: Top
    },
    {
      path: '/newbooks',
      name: '书库',
      component: NewBooks
    },
    {
      path: '/admin/userlist',
      name: '管理员后台',
      component: Userlist,
      meta: {allowBack: false}
    },
    {
      path: '/admin/booklist',
      component: Booklist,
      meta: {allowBack: false}
    },
    {
      path: '/admin/useredit',
      component: Useredit,
      meta: {allowBack: false}
    },
    {
      path: '/admin/useredit/:id',
      component: Useredit,
      meta: {allowBack: false}
    },
    {
      path: '/admin/bookedit',
      component: Bookedit,
      meta: {allowBack: false}
    },
    {
      path: '/admin/bookedit/:id',
      component: Bookedit,
      meta: {allowBack: false}
    },
    {
      path: '/searchmsg/:bookname',
      name: '搜索',
      component: Searchmsg
    },
    {
      path: '/searchmsg',
      name: '搜索',
      component: Searchmsg
    },
    {
      path: '/readbefore',
      name: '目录',
      component: Readbefore
    },
    {
      path: '/readbook',
      name: '目录',
      component: Readbook
    },
    {
      path: '/readbefore/:bookid',
      name: '阅读',
      component: Readbefore
    },
    {
      path: '/reading/',
      name: '阅读',
      component: Reading
    },
    {
      path: '/reading/:page',
      name: '阅读',
      component: Reading
    },
    {
      path: '/*/',
      name: '出错',
      component: Error
    },
  ]
})
