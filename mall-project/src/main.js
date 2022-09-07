import Vue from 'vue'
import App from './App.vue'
// import Layui from 'layui'
//引入element框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import "./static/css/main.css";
import "./static/layui/css/layui.css";
// 引入router
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
