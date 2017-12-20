import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routers from './router.js';
import './libs/css/commom.css';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Api from './api'
Vue.use(VueRouter);
Vue.use(iView);

//将调取接口方法设为全局
Vue.prototype.$api=Api;

//将路由变化设为全局
Vue.prototype.$rourer=new Object();


//路由加载全局变量
Vue.prototype.$routerActive='';
Vue.prototype.$routerLoad=false;

const RouterConfig = {
  mode: 'hash',
  routes: Routers
};
const router = new VueRouter(RouterConfig);




new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

iView.LoadingBar.config({
  height: 4
});

router.beforeEach((to, from, next) => {
  Vue.prototype.$rourer["from"]=from;
  Vue.prototype.$rourer["to"]=to;
  iView.LoadingBar.start();
  iView.Spin.show({
    render: (h) => {
      return h('div', [
        h('Icon', {
          'class': 'demo-spin-icon-load',
          props: {
            type: 'load-c',
            size: 22
          }
        }),
        h('div', '加载中')
      ])
    }
  });
  next();
});

router.afterEach((to, from, next) => {
  to.name=='404'?iView.LoadingBar.error():iView.LoadingBar.finish();
  iView.Spin.hide();
});

