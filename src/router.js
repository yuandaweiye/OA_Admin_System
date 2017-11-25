//主线路由配置
import Index from './views/index.vue';
import logIn from './views/Logs/LogIn.vue';
import Home from './views/Home/Home.vue';
import Membermanage from './views/Membermanage/Membermanage.vue';
import TelephoneP from './views/TelephoneP/TelephoneP.vue';
import Tool from  './views/Tool/Tool.vue';
import Usercenter from './views/UserCenter/user.vue'


const routers = [
  { path: '/',name:'index',component:Index,children:[
    {path:'/',name:'home',component:Home},
    {path:'/Membermanage',name:'Membermanage',component:Membermanage},
    {path:'/TelephoneP',name:'TelephoneP',component:TelephoneP},
    {path:'/Tool',name:'Tool',component:Tool},
    {path:'/Usercenter',name:'Usercenter',component:Usercenter},
  ]},
  { path: '/index',name:'index',component:Index},
  { path: '/logIn',name:'logIn',component:logIn}
];
export default routers;
