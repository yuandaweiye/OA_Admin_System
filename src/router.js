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
//月度申请-------------------------office---------------------------------------------
import MonthApply from  './views/office/monthApply/monthApply.vue';
import UseApply from './views/office/useApply/useApply.vue';
import AcuteApply from './views/office/acuteApply/acuteApply.vue';
//主页--------------------------------main---------------------------------------------
import AcuteAP from './views/Main/acuteAP.vue';
import AllApplications from './views/Main/allApplications.vue';
import ApplicationClass from './views/Main/applicationClass.vue'
import ApplicationReim from './views/Main/applicationReim.vue';
import FixedAP from './views/Main/fixedAP.vue';
import RevisionApproval from './views/Main/revisionApproval.vue';
import SacAP from './views/Main/sacAP.vue';
import UserAppInfo from './views/Main/userAppInfo.vue';


//404------------------------------------404--------------------------------------------
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

    //主页-------------------------main---------------------------------------------------
      //急性物品申请
    {path:'/main/acuteAP',name:'acuteAP',component:AcuteAP},
      //所有申请
    {path:'/main/allApplications',name:'allApplications',component:AllApplications},
      //申请分类
    {path:'/main/applicationClass',name:'applicationClass',component:ApplicationClass},
      //报销申请进度
    {path:'/main/applicationReim',name:'applicationReim',component:ApplicationReim},
      //固定用品申请
    {path:'/main/fixedAP',name:'fixedAP',component:FixedAP},
      //审批修改
    {path:'/main/revisionApproval',name:'revisionApproval',component:RevisionApproval},
      //用车申请
    {path:'/main/sacAP',name:'sacAP',component:SacAP},
      //用户申请信息
    {path:'/main/userAppInfo',name:'userAppInfo',component:UserAppInfo},
  ]},
  { path: '/login',name:'logIn',component:logIn},
  {path:'*',name:'404',component:Other},
  //登录页面
  { path: '/login',name:'logIn',component:logIn}
];
export default routers;
