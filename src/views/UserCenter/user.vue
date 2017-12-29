<style>
  /*个人中心-*/
  .personCenter{
    padding: 50px 40px;
  }
  .personCenter .personCenter_img{
    margin: 0 auto;
    text-align: center;
  }
  .personCenter .personCenter_img div{

  }
  .personCenter .personCenter_img div img{
      width: 100%;
      height: 100%;
  }
  .personCenter .personCenter_img p{
    background: #38ADFF;
    height: 30px;
    line-height: 30px;
    color: #fff;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  .personCenter .personCenter_img p span{

  }
  .personCenter .personCenter_img input[type="file"]{
    position: absolute;
    right: 0;
    left: 0;
    color: transparent;
    width: 100%;
    outline: none;
    border: none;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .personCenter_from{
    margin: 0 auto;
  }
  .personCenter_from p{
    margin-bottom: 30px;
    position: relative;
  }
  .personCenter_from p span.tip{
    position: absolute;
    left: 60px;
    bottom: -20px;
    height: 20px;
    line-height: 20px;
    color: #FF0101;
  }
  .personCenter_from p b{
    position: absolute;
    left: -16px;
    color: #FF0101;
  }
  .personCenter_from p .label{
    width: 70px;
    text-align: justify;
    float: left;
  }
  .personCenter_from p .label:after{
    content:'';
    width: 100%;
    display: inline-block;
    overflow: hidden;
    height: 0 !important;
  }
  .personCenter_from select{
    width: 100px;
    font-size: 12px;
    color: #4F4F4F;
  }
  .personCenter_from .button{

  }
  .personCenter_from .button button{
    width: 120px;
    height: 34px;
    border: 0;
    outline: none;
    background: #38ADFF;
    color: #fff;
    font-weight: 600;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .personCenter_from p.red input{
    border-color: #FF0101 !important;
  }

  @media screen and (max-width: 640px) {
    .personCenter{
      padding: 20px 10px;
    }
  }

</style>

<template>
  <div class="personCenter clearfiex">
    <Row>
        <Col span="4" :md="5" :sm="0" :xs="0">
          <div class="personCenter_img fl">
            <div>
              <img src="../../libs/images/tx.png" alt="">
            </div>
            <p>
             更换头像
              <input type="file" id="a" value="更换头像">
            </p>
            <Upload action="//jsonplaceholder.typicode.com/posts/" :format="['jpg','jpeg','png','gif']">
              <i-button type="ghost" icon="ios-cloud-upload-outline">更换头像</i-button>
            </Upload>
          </div>
        </Col>
        <Col :md="19" :sm="24" :xs="24">
            <div class="personCenter_from fl">
              <p>
                <span class="label">用户名：</span><span v-text="userInfo.username"></span>
              </p>
              <p :class="{'red':check.pass}">
                <span class="label">旧密码：</span>
                  <Input type="password" v-model="userInfo.password" icon="ios-locked"  placeholder="请输入旧密码" :maxlength="16" style="width: 200px"/>
                  <span class="tip" v-show="check.pass">密码错误，请重新输入</span>
              </p>
              <p :class="{'red':check.newPass}">
                <span class="label">新密码：</span>
                <Input type="password" v-model="userInfo.newPass" icon="ios-unlocked"  placeholder="请输入新密码" :maxlength="16" style="width: 200px" @on-blur="checkNewPass"/>
                <span class="tip" v-show="check.newPass">新密码格式错误(长度为6-16)</span>
              </p>
              <p :class="{'red':check.conPass}">
                </b><span class="label">确认密码：</span>
                <Input type="password" v-model="userInfo.conPass" icon="ios-unlocked-outline"  placeholder="请确认新密码" :maxlength="16" style="width: 200px" @on-blur="checkConPass"/>
                <span class="tip" v-show="check.conPass">两次密码不同，请重新输入</span>
              </p>
              <p :class="{'red':check.birth}">
                <span class="label">出生日期：</span>
                <Select v-model="userInfo.birthdate.year"  style="width:100px"  @on-change="buildDay">
                  <Option v-for="item in birthDates.year" :value="item" :key="item.value" style="width: 100%">{{ item}}</Option>
                </Select>
                <Select v-model="userInfo.birthdate.month"  style="width:100px" v-bind="{disabled:!userInfo.birthdate.year || userInfo.birthdate.year==''}"  @on-change="buildDay">
                  <Option v-for="item in birthDates.month" :value="item" :key="item" style="width: 100%">{{ item }}</Option>
                </Select>
                <Select v-model="userInfo.birthdate.day"  style="width:100px" v-bind="{disabled:!userInfo.birthdate.month || userInfo.birthdate.month==''}">
                  <Option v-for="item in birthDates.day" :value="item" :key="item" style="width: 100%">{{ item }}</Option>
                </Select>
                <span class="tip" v-show="check.birth">请补全出生日期</span>
              </p>
              <p>
                <span class="label">性别：</span>
                <RadioGroup v-model="userInfo.sex">
                  <Radio label="女"></Radio>
                  <Radio label="男"></Radio>
                </RadioGroup>
              </p>
              <p :class="{'red':check.phone}">
                <b><Icon type="asterisk" size="10"></Icon></b>
                <span class="label">手机号码：</span>
                <Input type="text" v-model="userInfo.phone" icon="android-phone-portrait" placeholder="请输入手机号码" :maxlength="11" style="width: 200px"/>
                <span class="tip" v-show="check.phone">手机号码输入错误，请重新输入</span>
              </p>
              <p :class="{'red':check.qq}">
                <span class="label">QQ号码：</span>
                <Input type="text" v-model="userInfo.qq" icon="chatbox-working" placeholder="请输入QQ号码" style="width: 200px" @on-blur="checkQQ"/>
                <span class="tip" v-show="check.qq">qq号码格式错误，请重新输入</span>
              </p>
              <p :class="{'red':check.eamil}">
                <b><Icon type="asterisk" size="10"></Icon></b>
                  <span class="label">E-MAIL：</span>
                <AutoComplete
                  v-model="userInfo.email"
                  @on-search="handleEmail"
                  placeholder="请输入邮箱地址"
                  style="width:200px" icon="email">
                  <Option v-for="item in emailList" :value="item" :key="item" style="display: block">{{ item }}</Option>
                </AutoComplete>
                <span class="tip" v-show="check.email">email格式错误，请重新输入</span>
              </p>
              <div class="button">
                <button class="submit" @click="submit">确认提交</button>
                <button class="reset" @click="reset">重置</button>
              </div>
            </div>
        </Col>
    </Row>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        userInfo:{
          username:'孙萌',
          password:'',
          newPass:'',
          conPass:'',
          sex:'男',
          phone:'',
          qq:'',
          email:'',
          birthdate:{
            year:'',
            month:'',
            day:''
          }
        },
        check:{
          pass:false,
          newPass:false,
          conPass:false,
          birth:false,
          phone:false,
          qq:false,
          email:false
        },
        birthDates: {
          year:[],
          month:[1,2,3,4,5,6,7,8,9,10,11,12],
          day:[]
        },
        emailList:[]
      }
    },
    created (){
      this.buildYear()
      this.$Message.config({
        top: 200
      });
    },
    mounted () {
    },
    methods: {
      handleEmail (value) {
        this.emailList = !value || value.indexOf('@') >= 0 ? [] : [
          value + '@qq.com',
          value + '@sina.com',
          value + '@163.com',
          value + '@126.com',
          value + '@yahoo.com'
        ];
      },
      buildYear () {
        var date=new Date()
        var curYear=new Date().getFullYear()            //获取当前年份
        this.birthDates.year=[]
        for(var i=curYear;i>=1900;i--){
            this.birthDates.year.push(i)
        }
      },
      buildDay (res) {
        var date=new Date()
        var days=new Date(this.userInfo.birthdate.year,this.userInfo.birthdate.month,0).getDate()        //获取当月天数
        this.birthDates.day=[]
        for(var i=1;i<=days;i++){
          this.birthDates.day.push(i)
        }
      },
      checkNewPass () {
        if(this.userInfo.newPass!=''){
            if(this.checkInput(this.userInfo.newPass)){
                this.check.newPass=false
                this.checkConPass()
                return true
            }else{
              this.check.newPass=true
              return false
            }
        }else{
          this.check.newPass=false
          return true
        }
      },
      checkConPass () {
        if(this.userInfo.newPass!=this.userInfo.conPass && this.userInfo.newPass!=''){
          this.check.conPass=true
        }else{
          this.check.conPass=false
        }
      },
      checkPass () {
        if(this.userInfo.password!=''){
          //密码验证接口
          return true
        }else{
          return true
        }
      },
      checkInput (value) {
        var reg=/^(\w){6,16}$/
        if (!reg.exec(value)){
          return false
        }else{
          return true
        }
      },
      checkBirth () {
        //验证出生日期
        if(this.userInfo.birthdate.year!=''){
          if (this.userInfo.birthdate.year!='' && this.userInfo.birthdate.month!='' && this.userInfo.birthdate.day!='') {
            this.check.birth=false
            return true
          }else{
            this.check.birth=true
            return false
          }
        }else{
          this.check.birth=false
          return true
        }

      },
      checkPhone () {
        //验证手机号码
        var reg_phone = /^1[3,4,5,7,8][0-9]{9}$/;

          if(reg_phone.test(this.userInfo.phone)){
              this.check.phone=false
              return true
          }else{
              this.check.phone=true
              return false
          }
      },
      checkQQ () {
        //验证qq号码
          if(this.userInfo.qq!=""){
              var reg_qq=/^[0-9]{5,12}$/
              if(reg_qq.test(this.userInfo.qq)){
                  this.check.qq=false
                  return true
              }else{
                  this.check.qq=true
                  return false
              }
          }else{
            this.check.qq=false
            return true
          }
      },
      checkEmail () {
          //验证邮箱
          var reg_email= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
          if(reg_email.test(this.userInfo.email)){
            this.check.email=false
            return true
          }else{
            this.check.email=true
            return false
          }
      },
      submit () {
        if(this.checkPass()){
          this.checkBirth()
          this.checkPhone()
          this.checkEmail()
          if(!this.check.phone && !this.check.newPass && !this.check.conPass && !this.check.birth && !this.check.pass && !this.check.qq && !this.check.email){
              console.log("提交成功")
            console.log(this.userInfo)
          }
        }
      },
      reset (){
        //重置
        for(var key in this.userInfo){
          if(key=='birthdate'){
            this.userInfo[key]["year"]=''
            this.userInfo[key]["month"]=''
            this.userInfo[key]["day"]=''
          }else if(key=='username'){

          }else{
            this.userInfo[key]=''
          }
        }
        for(var key in this.check){
          this.check[key]=false
        }
      }
    }
  }
  function handleFiles(files) {
    if (files.length) {
      var file = files[0];
      var reader = new FileReader();
      if (/text\/\w+/.test(file.type)) {
        reader.onload = function() {
          $('<pre>' + this.result + '</pre>').appendTo('body');
        }
        reader.readAsText(file);
      }
    }
  }
</script>

