//引入依赖及组件
import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);
//设置组件映射规则
const routes = [
  {
    path:"/",
    // redi
  },
  {
    path: "/find",
    name:'find',
    component: Find,
    children:[
      {
        path:"comend",
        component: Comend,
    },
    {
      path:"King",
      component: King,
  },
  {
    path:"Sing",
    component: Sing,
},
    ]
  },
  {
    path: "/my",
    name:'my',
    component: My
  },
  {
    path: "/part",
    name:'part',
    component: Part
  },
  {
    path:'*',
    component:Notfound
  }
  
]

const router = new VueRouter({
  routes
})
//导出
export default router;
