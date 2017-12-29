//主线路由配置
import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import logIn from './views/Logs/LogIn.vue';
//首页
import Home from './views/Home/home.vue';
import AlterQuick from './views/Home/alterQuick';
import Membermanage from './views/Membermanage/Membermanage.vue';
import TelephoneP from './views/TelephoneP/TelephoneP.vue';
import Tool from  './views/Tool/Tool.vue';
import Usercenter from './views/UserCenter/user.vue';
import MonthApply from  './views/office/monthApply.vue';
import UseApply from './views/office/useApply.vue';
import AcuteApply from './views/office/acuteApply.vue';
import MonthApproval from './views/office/monthApproval';
import UseApproval from  './views/office/useApproval.vue';
import AcuteApproval from  './views/office/acuteApproval.vue';
import MyProgress from './views/office/myProgress.vue';
import PendApply from './views/office/pendApply';



//车辆管理
import CarManageMent from './views/car/carManageMent';
import Other from './views/404/404.vue';

Vue.use(Router);

const routers = [
  { path: '/',name:'index',redirect: '/index',component:Index,children:[
    //首页
    {path:'/index',name:'home',component:Home},
    // 修改菜单快捷方式
    {path:'/alterQuick',name:'alterQuick',component:AlterQuick},
    //成员管理
    {path:'/membermanage',name:'Membermanage',component:Membermanage},
    //电话蒲管理
    {path:'/telephoneP',name:'TelephoneP',component:TelephoneP},
    //工具栏管理
    {path:'/tool',name:'Tool',component:Tool},
    //用户中心
    {path:'/usercenter',name:'Usercenter',component:Usercenter},
    //  办公管理
    {path:'/office/monthApply',name:'monthApply',component:MonthApply},
    {path:'/office/useApply',name:'useApply',component:UseApply},
    {path:'/office/acuteApply',name:'acuteApply',component:AcuteApply},
    {path:'/office/monthApproval',name:'monthApproval',component:MonthApproval},
    {path:'/office/useApproval',name:'useApproval',component:UseApproval},
    {path:'/office/acuteApproval',name:'acuteApproval',component:AcuteApproval},
    {path:'/office/myProgress',name:'myProgress',component:MyProgress},
    //我的待申请栏
    {path:'/office/pendApply',name:'pendApply',component:PendApply},
    //  车辆管理
    {path:'/car/carManageMent',name:'carManageMent',component:CarManageMent},
  ]},
  { path: '/login',name:'logIn',component:logIn},
  {path:'*',name:'404',component:Other}
  ]

export default routers
