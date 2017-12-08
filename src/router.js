//主线路由配置
import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import logIn from './views/Logs/LogIn.vue';
import Home from './views/Home/Home.vue';
import Membermanage from './views/Membermanage/Membermanage.vue';
import TelephoneP from './views/TelephoneP/TelephoneP.vue';
import Tool from  './views/Tool/Tool.vue';
import Usercenter from './views/UserCenter/user.vue';
import MonthApply from  './views/office/monthApply/monthApply.vue';
import UseApply from './views/office/useApply/useApply.vue';
import AcuteApply from './views/office/acuteApply/acuteApply.vue';
import Other from './views/404/404.vue';



Vue.use(Router);

const routers = [
  { path: '/',name:'index',redirect: '/index',component:Index,children:[
    //首页
    {path:'/index',name:'home',component:Home},
    //成员管理
    {path:'/membermanage',name:'Membermanage',component:Membermanage},
    //电话蒲管理
    {path:'/telephoneP',name:'TelephoneP',component:TelephoneP},
    //工具栏管理
    {path:'/tool',name:'Tool',component:Tool},
    //用户中心
    {path:'/usercenter',name:'Usercenter',component:Usercenter},
    //月度申请-------------------------office---------------------------------------------
    {path:'/office/monthApply',name:'monthApply',component:MonthApply},
    //用户申请
    {path:'/office/useApply',name:'useApply',component:UseApply},
    //紧急申请
    {path:'/office/acuteApply',name:'acuteApply',component:AcuteApply},
    //月度申请需求
    {path:'/office/monthApply',name:'monthApply',component:MonthApply},

    //月度申请-------------------------office---------------------------------------------



  ]},
  { path: '/login',name:'logIn',component:logIn},
  {path:'*',name:'404',component:Other},
  //登录页面
  { path: '/login',name:'logIn',component:logIn}
];
export default routers;
