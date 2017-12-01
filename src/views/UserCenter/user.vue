<style>
  /*个人中心-*/
  .personCenter{
    padding: 50px 40px;
  }
  .personCenter .personCenter_img{
    margin-right: 50px;
    width: 90px;
    height: 90px;
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

  }
  .personCenter_from p{
    margin-bottom: 20px;
  }
  .personCenter_from p .label label{
    width: 50px;
    text-align: justify;
    float: left;
  }
  .personCenter_from p .label label:after{
    content:'';
    width: 100%;
    display: inline-block;
    overflow: hidden;
    height: 0;
  }
  .personCenter_from select{
    width: 100px;
    font-size: 12px;
    color: #4F4F4F;
  }
  .personCenter_from select option{
    /*width: 100px;*/
    /*font-size: 12px;*/
    /*color: #4F4F4F;*/
  }
</style>

<template>
  <div class="personCenter clearfiex">
    <div class="personCenter_img fl">
      <div>
        <img src="../../libs/images/tx.png" alt="">
      </div>
      <p>
       更换头像
        <input type="file" value="更换头像">
      </p>
      <Upload action="//jsonplaceholder.typicode.com/posts/">
        <i-button type="ghost" icon="ios-cloud-upload-outline">更换头像</i-button>
      </Upload>
    </div>
    <div class="personCenter_from fl">
      <p>
        <span class="label"><label>用户名</label></span>：<span v-text="userInfo.username"></span>
      </p>
      <p>
        <span class="label"><label for="password">旧密码</label>：</span>
        <!--<input type="password" id="password"/>-->
        <Input type="password" v-model="value4" icon="locked" id="password" placeholder="请输入旧密码" style="width: 200px"/>
      </p>
      <p>
        <span class="label"><label for="newPass">新密码</label>：</span>
        <Input type="password" v-model="value4" icon="locked" id="newPass" placeholder="请输入旧密码" style="width: 200px"/>
      </p>
      <p>
        <span class="label"><label for="conPass">确认密码</label>：</span>
        <input type="password" id="conPass">
      </p>
      <p>
        <span class="label"><label for="birthYear">出生日期</label>：</span>
        <Select v-model="model1" id="birthYear" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model1" id="birthMonth" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model1" id="birthDay" style="width:100px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </p>
      <p>
        <span class="label"><label>性别</label>：</span>
        <!--<input type="radio" name="sex" value="0">女 &nbsp;&nbsp;<input type="radio" name="sex" value="1">男-->
        <RadioGroup v-model="userInfo.sex">
          <Radio label="女"></Radio>
          <Radio label="男"></Radio>
        </RadioGroup>
      </p>
      <p>
        <span class="label"><label for="phone">手机号码</label>：</span>
        <input type="text" id="phone">
      </p>
      <p>
        <span class="label"><label for="qq">QQ号码</label>：</span>
        <input type="text" id="qq">
      </p>
      <p>
        <span class="label"><label for="email">E-MAIL</label>：</span>
        <input type="text" id="email">
      </p>
      <div>
        <button>确认提交</button>
        <button>重置</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        userInfo:{
          username:'孙萌',
          sex:'男',
          birthdate:{
            year:2017,
            month:12,
            day:1
          }
        },
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    }
  }
</script>

