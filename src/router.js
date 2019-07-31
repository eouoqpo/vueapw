import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
//   首页的页面
import Index from './views/Index/Index.vue';
import Search from './views/Index/Search.vue';
import Detail from './views/Index/Detail.vue';      //  加价拍和减价拍的详情页
import Stable from './views/Index/Stable.vue';    //  一口价的详情页

//   个人中心的页面
import User from './views/User/User.vue';         //  个人中心的首页
import Setting from './views/User/Setting.vue';       //  用户的设置中心界面
import AddList from './views/User/AddList.vue';        //  收货地址列表
import Mlogin from './views/User/Mlogin.vue';         //   修改登录密码
import Mpay from  './views/User/Mpay.vue';           //   修改支付密码
import ResetPay from './views/User/ResetPay.vue';     //   重置支付密码
import Order from './views/User/Order.vue';           //   订单列表展示
import Red from './views/User/Red.vue';               //    红包列表页
import MyAuct from './views/User/MyAuct.vue';          //     我的参拍
import MyFocus from './views/User/MyFocus.vue';        //     我的关注
import MyAccount from './views/User/MyAccount.vue';     //    我的账户
import Recharge from './views/User/Recharge.vue';       //    用户充值
import Present from './views/User/Present.vue';         //    用户提现
import Myspread from './views/User/Myspread.vue';       //    我的注册邀请
import Explain from './views/User/Explain.vue';         //    平台简介
import Commission from './views/User/Commission.vue';   //    我的佣金
import Adder from './views/User/Adder.vue';             //    添加收货地址
import Login from './views/User/Login.vue';             //    用户登录的界面
import Register from './views/User/Register.vue';       //    用户注册
import Forget from './views/User/Forget.vue';           //    找回密码
// import Odetial from '/views/User/Odetial.vue';        //   订单的详情页


//   发现的页面
import Find from './views/Find/Find.vue';                //   发现首页
import Flist from './views/Find/Flist.vue';              //   发现列表页
import FDetail from './views/Find/FDetail.vue';          //   发现详情页

//   分类的页面
import Sort from './views/Sort/Sort.vue';
import Price from './views/Sort/Price';   //   出价详情页
import SDetails from './views/Sort/SDetails';   //  商品列表页   和二次拍卖共用了同一个页面

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index'
      }
    },{
      path: '/index',
      name: 'index',
      component: Index
    },{
      path: '/index/search',
      name: 'search',
      component: Search
    },{
      path: '/index/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/index/stable',
      name: 'stable',
      component: Stable
    },
    //    分类的路由
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },{
      path:'/sort/price',
      name:"price",
      component:Price
    },{
      path:'/sort/sdetails',
      name:'sdetails',
      component:SDetails
    },

    //    发现的路由
    {
      path: '/find',
      name: 'find',
      component: Find
    },{
      path:'/find/flist',
      name:'flist',
      component:Flist
    },{
      path:'/find/fdetail',
      name:'fdetail',
      component:FDetail
    },

    //   个人中心的路由
    {
      path: '/user',
      name: 'user',
      component: User
    },{
      path:'/user/setting',
      name:'setting',
      component:Setting
    },{
      path:'/user/addlist',
      name:'addlist',
      component:AddList
    },{
      path:'/user/mlogin',
      name:'mlogin',
      component:Mlogin
    },{
      path:'/user/mpay',
      name:'mpay',
      component:Mpay
    },{
      path:'/user/resetpay',
      name:'resetpay',
      component:ResetPay
    },{
      path:'/user/order',
      name:'order',
      component:Order,    //    知道为什么了，这里多加了一个 S  应该是 component
    },{
      path:'/user/reward',
      name:'red',
      component:Red
    },{
      path:'/user/myauct',
      name:'myauct',
      component:MyAuct
    },{
      path:'/user/myfocus',
      name:'myfocus',
      component:MyFocus
    },{
      path:'/user/myaccount',
      name:'myaccount',
      component:MyAccount
    },{
      path:"/user/recharge",
      name:'recharge',
      component:Recharge
    },{
      path:'/user/present',
      name:'present',
      component:Present
    },{
      path:'/user/myspread',
      name:'myspread',
      component:Myspread
    },{
      path:'/user/explain',
      name:'explain',
      component:Explain
    },{
      path:'/user/commission',
      name:'commission',
      component:Commission
    },{
      path:'/user/adder',
      name:'adder',
      component:Adder
    },{
      path:'/user/login',
      name:'login',
      component:Login
    },{
      path:'/user/register',
      name:'register',
      component:Register
    },{
      path:'/user/forget',
      name:'forget',
      component:Forget
    }
  ]
})
