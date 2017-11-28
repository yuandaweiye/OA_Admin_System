<style>
  header{
    width: 100%;
    height: 65px;
    background-color: #FFFFff;
  }
  .index-header-Content{
    width: 1080px;
    margin: 0 auto;
    height: 65px;
  }
  .index-header-log{
    width: 260px;
    height: 65px;
    line-height: 65px;
    float:left;
    font-size: 22px;
  }
  .index-header-quit{
    width: 200px;
    height: 65px;
    line-height: 65px;
    font-size: 16px;
    float: right;
    text-align: end;
  }
  nav{
    height: 60px;
    width: 1080px;
    margin:0 auto;
    background-color: #38adff;
  }
  .nav-list{
    height: 60px;
    line-height: 60px;
  }
  .nav-list p{
    float: left;
    width: 260px;
    text-indent: 20px;
    font-size: 14px;
    color: #FFFFff;
  }
  .nav-list li{
    width: 180px;
    text-indent: 20px;
    float: left;
    font-size: 14px;
    color: #FFFFff;
    cursor: pointer;
  }
  .index-content{
    width: 1080px;
    margin: 0 auto;
  }
  .index-content_left{
    width: 260px;
    height: 800px;
    float: left;
  }
  .index-content_right{
    width: 700px;
    height: 300px;
    background-color: #f66;
    float: left;
    margin-left: 30px;
  }
</style>
<template>
  <div class="index">
    <header>
      <div class="index-header-Content">
        <div class="index-header-log">
          远大伟业OA系统
        </div>
        <div class="index-header-quit">
          退出  <i class="iconfont icon-tuichu" style="font-size: 16px;color:#38adff;"></i>
        </div>
      </div>
    </header>
    <nav>
      <ul class="nav-list">
        <router-link to="/" tag="p">&nbsp;<span v-show="!isMenu">返回首页</span></router-link>
        <router-link to="/TelephoneP" tag="li">电话簿</router-link>
        <router-link to="/Tool" tag="li">工具台</router-link>
        <router-link to="/Membermanage" tag="li">成员管理</router-link>
        <router-link to="/Usercenter" tag="li">个人中心</router-link>
      </ul>
    </nav>
    <div class="index-content">
      <div class="index-content_left" >
        <index-Left v-if="isMenu"></index-Left>
        <index-Menu v-if="!isMenu"></index-Menu>
      </div>
      <div class="index-content_right">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
  //导入获取cookie方法，判断用户是否登录
  import  utils  from '../libs/util';
  import { Button,Table } from 'iview';
  import  indexLeft from '../component/indexLeft.vue';
  import  indexMenu from  '../component/index_menu.vue';
  export default {
//    定义全局变量
      data(){
        return{
          isMenu:true
        }
      },
//        组件加载完闭之后
    mounted:function () {
      //      判断用户是否登录，如果登录
      let userInfo=utils.getCookie("userInfo");
      if(!userInfo){location.href="/logIn"};
      var nowRouter=this.$route.path;
      if(nowRouter=="/"){this.isMenu=true}else{this.isMenu=false};
    },
    methods:{
      getRouter:function () {
        // 获取当前路由信息，决定加载哪个左侧栏
          var nowRouter=this.$route.path;
          if(nowRouter=="/"){this.isMenu=true}else{this.isMenu=false};
      }
    },
    components:{
      "Button":Button,
      "Table":Table,
      "indexLeft":indexLeft,
      "indexMenu":indexMenu
    },
//    监听路由的变化
    watch:{
      "$route":"getRouter"
    }
  };
</script>
