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
    {path:'/index',name:'home',component:Home},
    {path:'/membermanage',name:'Membermanage',component:Membermanage},
    {path:'/telephoneP',name:'TelephoneP',component:TelephoneP},
    {path:'/tool',name:'Tool',component:Tool},
    {path:'/usercenter',name:'Usercenter',component:Usercenter},
    {path:'/office/monthApply',name:'monthApply',component:MonthApply},
    {path:'/office/useApply',name:'useApply',component:UseApply},
    {path:'/office/acuteApply',name:'acuteApply',component:AcuteApply},
  ]},
  { path: '/login',name:'logIn',component:logIn},
  {path:'*',name:'404',component:Other}
];

export default routers
