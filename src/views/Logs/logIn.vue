<template>
    <div class="logIn_content">
        <div class="logIn-content_header">

        </div>
        <div class="logIn-content_body">
            <div class="logIn-content-body_form">
                <div class="logIn-from_header">
                    <div v-bind:class="classObject"  @click="addActive(1)">账号登录</div>
                    <div v-bind:class="classObject02"  @click="addActive(2)">扫码登录</div>
                </div>
                <div class="logIn-from_content">
                    <div :class="isShow ? 'form_left ':'form_left active_content'">
                        <p><i class="iconfont icon-user" style="height: 45px;line-height: 45px;font-size: 22px;margin-left: 10px"></i><input type="text" max="16" placeholder="请输入用户名" v-model="userName"></p>
                        <p><i class="iconfont icon-mima" style="height: 45px;line-height: 45px;font-size: 22px;margin-left: 10px"></i><input type="password" max="16" placeholder="请输入密码" v-model="userPwd"></p>
                        <p @click="signIn"><button>登录</button></p>
                        <p><a href="javascript:;">忘记密码</a></p>
                    </div>
                    <div :class="isShow ? 'form_right active_content':'form_right'">
                        <div class="form_EWM"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="logIn_content_footer">
            <dl class="content_footer_dl">
                <dt>远大伟业集团网站</dt>
                    <ul>
                        <li>集团介绍</li>
                        <li>中文版</li>
                        <li>English</li>
                        <li>远大伟业集团网站</li>
                    </ul>
            </dl>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import  utils  from '../../libs/util';
  export default {
    data () {
      return{
        classObject:{
          'logIn-from-header-left': true,
          logIn_Active: true
        },
        classObject02:{
          'logIn-from-header-left': true,
          logIn_Active: false
        },
        isShow:true,
        userName:'',
        userPwd:""
      }
    },
    mounted:()=>{
    },
    methods:{
      addActive:function(event){
        if(event==1){
          this.classObject.logIn_Active=true;
          this.classObject02.logIn_Active=false;
          this.isShow=true
        }else{
          this.classObject.logIn_Active=false;
          this.classObject02.logIn_Active=true;
          this.isShow=false
        }
      },
      signIn:function () {
        if(this.userName && this.userPwd){
//            发送请求测试登
          utils.setCookie(this.userName,this.userPwd,7);
          location.href='/index';
        }else{
          alert("姓名或者密码尚未输入");
        }
      }
    },
    computed:{

    },
    updated:{

    }
  }
</script>
<style>
    .logIn_content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .logIn-content_header{
        height: 65px;
        width: 100%;
        background-color: #e7e8ec;
        background: url("../../libs/images/logIn_header_bg.jpg") no-repeat center top;
        background-size: cover;
    }
    .logIn-content_body{
        flex: 1;
        background: url("../../libs/images/logIn_content_bg.jpg") no-repeat left top;
        background-size: cover;
        position: relative;

    }
    .logIn_content_footer{
        height: 130px;
        background-color: #e7e8ec;
    }
    .content_footer_dl{
        padding: 10px;
    }
    .content_footer_dl dt{
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-bottom: 15px;
    }
    .content_footer_dl ul{
        width: 325px;
        margin: 0 auto;
    }
    .content_footer_dl ul li{
        padding: 0;
        margin: 0;
        height: 14px;
        line-height: 14px;
        width: 63px;
        float: left;
        text-align: center;
        border-right: 2px solid #a0a0a0;
        color: #1c4487;
    }
    .content_footer_dl ul li:nth-child(4){
        width: 130px;
        color: #666;
        border-right: none;

    }
    .logIn-content-body_form{
        width: 320px;
        height: 370px;
        overflow: hidden;
        border-radius: 15px;
       background-color: rgba(0,0,0,.1);
        box-shadow: 3px -2px 21px 2px #000;
        position:absolute;
        right: 8%;
        top:20%;
    }
    .logIn-from_header{
        height: 65px;
        line-height: 65px;
    }
    .logIn-from_header .logIn-from-header-left{
        height: 65px;
        line-height: 65px;
        text-align: center;
        width: 50%;
        font-size: 18px;
        float: left;
        color: #fff;
        border-bottom: 2px solid #fff;
      cursor: pointer;
    }
    .logIn-from_header .logIn_Active{
        border-bottom: 2px solid #0e3880;
        color: #0e3880;
    }
    .form_left{
        width: 100%;
        padding-top:10px;
        overflow: hidden;
    }
    .form_left p{
        width: 90%;
        height: 45px;
        border-radius:5px;
        margin:0 auto;
        background-color: #fff;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .form_left p:nth-child(1){
        margin-top: 20px;
    }

    .form_left p input{
        border:0px;
        outline: none;
        height:45px;
        line-height: 45px;
        width: 85%;
        font-family: "微软雅黑";
        font-size: 16px;
        float: right;
    }
    .form_left p button{
        height: 100%;
        width: 100%;
        background-color: #0e3880;
        color: #fff;
        border: 0px ;
    }
    .form_left p:nth-child(4){
        background-color: transparent;
        text-align: end;
    }
  .form_EWM{
    width: 200px;
    height: 200px;
    background-color: #FFFFff;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
  }
  .active_content{
    display: none;
  }
</style>
