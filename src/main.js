import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routers from './router.js';
import './libs/css/commom.css';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import RouterLoad from './utils/global'
import Api from './api'
Vue.use(VueRouter);
Vue.use(iView);

//将调取接口方法设为全局
Vue.prototype.$api=Api


//路由加载全局变量
Vue.prototype.$routerActive=''
Vue.prototype.$routerLoad=RouterLoad

const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);




new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

iView.LoadingBar.config({
  height: 3
});

router.beforeEach((to, from, next) => {

  this.$routerLoad=true

  iView.LoadingBar.start();
  console.log(this.$routerLoad)
  next();
});

router.afterEach((to, from, next) => {
//  this.$routerLoad=false
  iView.LoadingBar.finish();
  console.log(this.$routerLoad)
 //this.$routerLoad=false
});
