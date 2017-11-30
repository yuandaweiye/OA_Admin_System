<template>
  <div class="box_left fl">
    <div class="box_left_head">
      <div class="box_left_headImg"><img src="../libs/images/headImg.png" alt="用户头像"></div>
      <p title="何智能">何智能</p>
      <p title="前端工程师"><span class="margin-r-10">职位</span><span>前端工程师</span></p>
      <p title="信息中心"><span class="margin-r-10">所属部门：</span><span>信息中心</span></p>
    </div>
    <div class="box_left_calendar">
      <p class="box_left_calendar_title"><svg class="icon margin-r-10" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1385"><path d="M879.104 1008.128H129.536c-37.376 0-68.096-30.72-68.096-68.096V189.952c0-37.888 30.72-68.096 68.096-68.096h68.096v34.304c0 56.32 45.568 102.4 102.4 102.4 56.32 0 102.4-45.568 102.4-102.4v-34.304h204.288v34.304c0 56.32 45.568 102.4 102.4 102.4s102.4-45.568 102.4-102.4v-34.304h68.096c37.376 0 68.096 30.72 68.096 68.096v749.568c-0.512 37.888-30.72 68.608-68.608 68.608z m0-647.68H129.536v579.584h749.568V360.448zM300.032 530.944h-102.4v-102.4h102.4v102.4z m0 169.984h-102.4v-102.4h102.4v102.4z m0 170.496h-102.4v-102.4h102.4v102.4z m169.984-340.48h-102.4v-102.4h102.4v102.4z m0 169.984h-102.4v-102.4h102.4v102.4z m0 170.496h-102.4v-102.4h102.4v102.4z m170.496-340.48h-102.4v-102.4h102.4v102.4z m0 169.984h-102.4v-102.4h102.4v102.4z m0 170.496h-102.4v-102.4h102.4v102.4z m170.496-340.48h-102.4v-102.4h102.4v102.4z m0 169.984h-102.4v-102.4h102.4v102.4z m0 170.496h-102.4v-102.4h102.4v102.4zM707.584 224.256c-36.864 0-67.072-30.208-67.072-67.072V86.528c0-36.864 30.208-67.072 67.072-67.072 36.864 0 67.072 30.208 67.072 67.072v70.144c0 37.376-29.696 67.584-67.072 67.584z m-408.576 0c-36.864 0-67.072-30.208-67.072-67.072V86.528c0-36.864 30.208-67.072 67.072-67.072s67.072 30.208 67.072 67.072v70.144c0 37.376-30.208 67.584-67.072 67.584z" fill="#5D5D5D" p-id="1386"></path></svg><span>备忘录</span></p>
      <Progress :percent="40" hide-info :stroke-width="3"></Progress>
      <div id='schedule-box' class="boxshaw">

      </div>
      <div class="box_left_writen" id="box_left_writen" v-if="indexBwl.open">
        <b class="close-circled" @click="closeBwl"><Icon size="20" type="ios-close-outline"></Icon></b>
        <span v-text="indexBwl.time"></span>
        <p v-text="indexBwl.text"></p>
      </div>
    </div>
  </div>
</template>


<style>
  .box_left{
    background: #F4F6F8;
    width: 100%;
    font-size: 12px;
    color: #343434;
    overflow: hidden;
  }

  .box_left_head{
    text-align: center;
    padding: 30px 0;
  }
  .box_left_head p{
    line-height: 26px;
  }

  .box_left_headImg{
    width: 68px;
    height: 68px;
    margin: 0 auto;
    margin-bottom: 10px;
    -webkit-border-radius:2px;
    -moz-border-radius: 2px;
    border-radius: 2px;;
  }
  .box_left_calendar {
    background: #fff;
    margin: 10px;
    padding: 16px 20px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;;
  }
  #schedule-box{
    width: 200px;
    margin: 0 auto;
    padding: 10px 5px;
    font-size: 12px;
  }
  .schedule-hd{
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
  .today{
    flex: 1;
    text-align: center;
    height: 24px;
    line-height: 24px;
    color: #C53929;
  }
  .ul-box{
    overflow: hidden;
  }
  .ul-box > li{
    float: left;
    width: 14.28%;
    text-align: center;
    padding: 5px 0;
  }
  .other-month{
    color: #999999;
    font-size: 0;
  }
  .current-month{
    color: #333333;
  }
  .today-style{
    border-radius: 50%;
    background: #58d321;
  }
  .arrow{
    cursor: pointer;
    line-height: 20px;
    color: #00BDFF;
  }
  .dayStyle{
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    line-height:25px;
    cursor: pointer;
  }
  .other-month .dayStyle{
    cursor: auto;
  }
  .current-month > .dayStyle:hover{
    background: #00BDFF;
    color: #ffffff;
  }
  .today-flag{
    background: #C53929;
    color: #fff;
  }
  .selected-style {
    background: #00BDFF;
    color: #ffffff;
  }
  #h3Ele{
    text-align: center;
    padding: 10px;
  }
  .box_left_calendar_title span{
    vertical-align: middle;
  }
  .box_left_calendar .icon{
    width: 20px;
    height: 20px;
  }

  /*备忘录*/
  .box_left_writen{
    border: 1px solid #E2E2E2;
    background: #fff;
    padding: 6px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;;
    position: relative;
  }
  .box_left_writen span{
    color: #00BDFF;
    line-height: 28px;
  }
  .box_left_writen p{
    line-height: 24px;
  }
  .box_left_writen .close-circled{
    position: absolute;
    width: 20px;
    height: 20px;
    top: -10px;
    right: -10px;
    cursor: pointer;
    color: #363A44;
    background: #fff;
  }

</style>
<script type="text/ecmascript-6">
  import Schedule from '../utils/schedule'
  var indexBwl=new Object({
    open:true,
    time:'',
    text:''
  });

  export default {
    data () {
      return {
        indexBwl:indexBwl
      }
    },
    create () {
      this.closeBwl()

      console.log(8);
    },
    mounted () {
      this.bulidBwl()
    },
    methods: {
      bulidBwl: function () {
        var mySchedule = new Schedule({
          el: '#schedule-box',
          clickCb: function (y,m,d) {
            indexBwl.open=true;
            indexBwl.time=y+'-'+m+'-'+d;
            indexBwl.text='部门会议——时间：'+y+'-'+m+'-'+d
          },
          nextMonthCb: function (y,m,d) {
          },
          nextYeayCb: function (y,m,d) {
          },
          prevMonthCb: function (y,m,d) {
          },
          prevYearCb: function (y,m,d) {
          }
        }, function (res) {
          indexBwl.open=true;
          indexBwl.time=res;
          indexBwl.text='部门会议——时间：'+res
        });
      },
      closeBwl:function () {
        indexBwl.open=false;
      }
    }
  }
</script>
