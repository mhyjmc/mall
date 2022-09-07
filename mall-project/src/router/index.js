//引入依赖及组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import product from '@/components/Product/index'
import index from '@/components/index/index'
import  About from '@/components/About/index'
import Today from '@/components/Today/index'
import html from '@/components/Demo/Index'
import login from '@/components/Demo/Login.vue'
import register from '@/components/Demo/Register.vue'
import back from '@/components/backEnd/user'
import Index from '../components/views/index'
import allGood from '../components/views/allGoods.vue'
import Bulk from '../components/views/Bulk.vue'
import My from '../components/views/My.vue'
import shopCart from '../components/views/shopCart.vue'

Vue.use(VueRouter);
//设置组件映射规则
const routes = [
  {
    path:"/",
    redirect: '/index/html'//首页路由
  },
  
  {
    path: "/index",//首页路由
    name:'index',
    component: index,
    children: [{
      path: "/index/Today",//团购页面
      name:'Today',
      component: Today,
    },
    {
      path: "/index/About",//了解我们
      name:'About',
      component: About,
    },
    {
      path: "/index/html",//了解我们
      name:'html',
      component: html,
    },
    {
      path: "/index/product",//商品详情页
      name:'product',
      component: product,
    },
    {
      path:'/index/allGoods',
      component:allGood,//所有商品路由
    },
  ]
  },
  {
    path: "/login",//登录页面
    name:'login',
    component: login,
  },
  {
    path: "/register",//注册页面
    name:'register',
    component: register,
  },
  {
    path:'/bulk',
    component:Bulk,   //团购页面
  },
  {
    path:'/my',
    component:My,
  },
  {
    path:'/shopcart',
    component:shopCart,
  },
  
  
]

const router = new VueRouter({
  routes
})
//导出
export default router;
