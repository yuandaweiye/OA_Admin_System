//主线路由配置
import Index from './views/index.vue'
import logIn from './views/Logs/LogIn.vue'

const routers = [
  { path: '/',name:'index',component:Index},
  { path: '/index',name:'index',component:Index},
  { path: '/logIn',name:'logIn',component:logIn}
];
export default routers;
