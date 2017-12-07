<style>

  .index-header-Content{
    max-width: 1080px;
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
    max-width: 1080px;
    margin:0 auto;
    background-color: #38adff;
    height: 56px;
    line-height: 56px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  nav li{
    cursor: pointer;
  }
  nav li.active,nav li:hover{
    color: #C53929;
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
    max-width: 1080px;
    margin: 0 auto;
  }
  .index-content_left{
    height: 800px;
    background: #F4F6F8;
  }
  .index-content_right{
    background: #fff;
    height: 800px;
  }

  /*返回首页*/
  .goIndex{
    text-align: left;
    min-height: 1px;
    padding-left: 20px;
    cursor: pointer;
  }
  .goIndex :hover{
    color: #C53929;
  }
  .goIndex i{
    font-size: 24px;
  }

  /*右侧样式*/
  .index-content_right{
    padding: 20px 30px;
  }


  @media screen and (max-width: 640px) {
    nav{
      height: 36px !important;
      line-height: 36px !important;
      font-size: 14px !important;
      margin-top: 10px;
    }
    .goIndex{
      padding-left: 0 !important;
      text-align: center !important;
    }
    .goIndex i{
      font-size: 0px;
    }

    /*右侧样式*/
    .index-content_right{
      padding: 5px 10px;
    }

  }
  @media screen  and  (min-width: 640px) and (max-width: 992px) {
    nav{
      height: 44px !important;
      line-height: 44px !important;
      font-size: 16px !important;
      margin-top: 15px;
    }
    .goIndex i{
      font-size: 18px;
    }

    /*右侧样式*/
    .index-content_right{
      padding: 15px 20px;
    }
  }


</style>
<template>
  <div class="index">
    <Header>
    </Header>
    <nav>
      <Row>
        <i-col :md="{span: 6,push:0}" :sm="{span: 6}" :xs="{span:6}">
          <div class="goIndex" >
            <router-link to="/" tag="p"><Icon type="ios-home" v-show="!isMenu"></Icon><span class="padding-1-5" v-show="!isMenu">返回首页</span></router-link>
          </div>
        </i-col>
        <i-col :md="{span: 3}" :sm="{span: 4 }" :xs="{span:4}">
          <router-link to="/telephoneP" tag="li" :class="{'active':menuActive=='/telephoneP'}">电话簿</router-link>
        </i-col>
        <i-col :md="{span: 3}" :sm="{span: 4 }" :xs="{span:4}">
          <router-link to="/tool" tag="li" :class="{'active':menuActive=='/tool'}">工具台</router-link>
        </i-col>
        <i-col :md="{span: 3}" :sm="{span: 4}" :xs="{span:5}">
          <router-link to="/membermanage" tag="li" :class="{'active':menuActive=='/membermanage'}">成员管理</router-link>
        </i-col>
        <i-col :md="{span: 3}" :sm="{span: 4 }" :xs="{span:5}">
          <router-link to="/usercenter" tag="li" :class="{'active':menuActive=='/usercenter'}">个人中心</router-link>
        </i-col>
      </Row>
    </nav>
    <div class="index-content">
      <Row>
        <i-col :md="6" :sm="8" :xs="0">
          <div class="index-content_left" >
            <index-Left v-if="isMenu"></index-Left>
            <index-Menu v-if="!isMenu"></index-Menu>
          </div>
        </i-col>
        <i-col :md="18" :sm="16" :xs="24">
          <div class="index-content_right">
            <router-view></router-view>
          </div>
        </i-col>
      </Row>
    </div>
    <Spin fix v-show="routerLoad"></Spin>
  </div>

</template>
<script type="text/ecmascript-6">
  //导入获取cookie方法，判断用户是否登录
  import  utils  from '../libs/util';
  import { Button,Table } from 'iview';
  import Header from '../component/header.vue';
  import  indexLeft from '../component/indexLeft.vue';
  import  indexMenu from  '../component/index_menu.vue';
  export default {
//    定义全局变量
      data(){
        return{
          isMenu:true,
          menuActive:'',
          routerLoad:this.$routerLoad.routerLoad
        }
      },
//        组件加载完闭之后
    created() {
      },
    mounted:function () {
      //      判断用户是否登录，如果登录
      let userInfo=utils.getCookie("oa_userInfo");
      if(!userInfo){location.href="/login"};
      this.getRouter()
    },
    methods: {
      getRouter:function () {
        //      获取当前路由信息，决定加载哪个左侧栏
          var nowRouter=this.$route.path;
          if(nowRouter=="/" || nowRouter=="/index" ){this.isMenu=true;}else{this.isMenu=false;};
        this.menuActive=this.$route.path
      }
    },
    components:{
      "Header":Header,
      "indexLeft":indexLeft,
      "indexMenu":indexMenu
    },
//    监听路由的变化
    watch: {
      "$route": "getRouter"
    }
  };
</script>
