
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
    cursor: pointer;
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
<template>
    <div class="logIn_content">
        <div class="logIn-content_header">

        </div>
        <div class="logIn-content_body">
            <div class="logIn-content-body_form">
                <div class="logIn-from_header">
                    <div  class="logIn-from-header-left"  :class="{'logIn_Active':logIn_Active}"  @click="addActive1">账号登录</div>
                    <div  class="logIn-from-header-left"  :class="{'logIn_Active':!logIn_Active}"  @click="addActive2">扫码登录</div>
                </div>
                <div class="logIn-from_content">
                    <div class="form_left" v-show="isShow">
                        <p><i class="iconfont icon-user" style="height: 45px;line-height: 45px;font-size: 22px;margin-left: 10px"></i><input type="text" max="16" placeholder="请输入用户名" v-model="userName"></p>
                        <p><i class="iconfont icon-mima" style="height: 45px;line-height: 45px;font-size: 22px;margin-left: 10px"></i><input type="password" max="16" placeholder="请输入密码" v-model="userPwd"></p>
                        <p @click="validate"><button>登录</button></p>
                    </div>
                    <div class="form_left" v-show="!isShow">
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
     return {
       logIn_Active:true,
       isShow:true,
       userName:'',
       userPwd:""
     }
    },
    created(){
      this.$Message.config({
        top: 200
      });
    },
    mounted(){
      let userInfo=utils.getCookie("oa_userInfo");
      if(userInfo){
          console.log(userInfo);
         this.userName=userInfo.username
         this.userPwd=userInfo.password
      }
    },
    methods:{
      addActive1 () {
        this.logIn_Active=true
        this.isShow=true
      },
      addActive2 () {
//        this.logIn_Active=false
//        this.isShow=false
        this.$Message.destroy()
        this.$Message.warning({content:'暂不支持扫码登录',duration:2})
      },
      validate:function () {
        if(this.userName && this.userPwd){
//            发送请求测试登
          let userInfo={
            name:this.userName,
            pass:this.userPwd
          };
          this.login(userInfo);
        }else{
          this.$Message.destroy()
          this.$Message.warning({content:'账号和密码不能为空', duration:3});
        }
      },
      login (data) {
        this.$api.post('/api.php/index/login ',data,r=>{
          console.log(r);
          if(r.status===1){
            this.$Message.destroy()
            this.$Message.success({content:'登录成功，即将为你跳转',duration:.5, onClose: res=> {
               utils.setCookie(this.userName,this.userPwd,1);
              if(this.$rourer.from && this.$rourer.from.path){
                this.$router.push({path:this.$rourer.from.path})
              }else{
                this.$router.push({path:'/index'})
              }
            }});
          }else{
            this.$Message.destroy()
            this.$Message.error({content:'登录失败，账号或密码不对',duration: 3});
          }
        },e=>{
          this.$Message.destroy()
          this.$Message.error({content:'网络链接失败',duration: 3});
        })
      }
    }
  }
</script>
