
<style>
  .swiper-container{
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
  }
  .swiper-wrapper img{
    max-width: 100%;
  }
  /*分页器样式*/
  .swiper-pagination-bullet{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #fff;
    opacity: .8;
    border-radius: 50%;
    margin:0 10px !important;
  }
  .swiper-pagination-bullet-active{
    background: #38ACFF;
  }

  /*z左右箭头样式*/
  .swiper-button-next, .swiper-button-prev{
    width: 32px;
    height: 32px;
    background-size: contain;
  }
  .swiper-button-prev{
    background: url("../../libs/images/swiper_button.png") no-repeat left center;
    background-position: 0,0;
  }
  .swiper-button-next{
    background: url("../../libs/images/swiper_button.png") no-repeat left center;
    background-position: -40px,0;
  }
  .swiper-container .swiper-button-prev, .swiper-container .swiper-button-next{
    display: none;
  }
  .swiper-container:hover .swiper-button-prev,.swiper-container:hover .swiper-button-next{
    display: block;
  }

  /*快捷操作*/
  .ivu-card-body{
    padding:16px 0;
  }
  .quickOption{

  }
  .quickOption .quickOption_title{
    padding: 10px 0;
  }
  .quickOption .quickOption_title h1{
    font-size: 16px;
  }
  .quickOption .quickOption_title span{
    font-size: 14px;
    cursor: pointer;
    color: #787878;
  }
  .quickOption .quickOption_title span:hover{
    color: #C53929;
  }
  .quickOption .quickOption_title span i{
    font-size: 14px;
    margin-right: 5px;
  }
  .quickOption .quickOption_card .card{
    cursor: pointer;
  }
  .quickOption .quickOption_card h3{
    color: #787878;;
  }
  .quickOption .quickOption_card .card h3:hover{
    color: #C53929;
  }
  .quickOption .quickOption_card span{
    margin-left: 5px;
  }
  .quickOption .quickOption_card .icon{
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 26px;
    border-radius: 5px;
    color: #fff;
  }
  .quickOption .quickOption_card .icon_office{
    background: #F7B55E;
  }

  @media screen and (max-width: 640px) {
    .swiper-pagination-bullet{
      width: 8px;
      height: 8px;
      margin: 0 5px !important;
    }
    .swiper-button-next, .swiper-button-prev{
      display: none;
    }
    .quickOption .quickOption_card .icon{
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
    }
    .swiper-container:hover .swiper-button-prev,.swiper-container:hover .swiper-button-next{
      display: none;
    }
  }
  @media screen  and  (min-width: 640px) and (max-width: 992px) {
    .swiper-pagination-bullet{
      width: 12px;
      height: 12px;
      margin: 0 8px !important;
    }
    .swiper-button-next, .swiper-button-prev{
      display: none;
    }
    .quickOption .quickOption_card .icon{
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 26px;
    }
    .swiper-container:hover .swiper-button-prev,.swiper-container:hover .swiper-button-next{
      display: none;
    }
  }
</style>
<template>
  <!--swiper-->
  <div>
    <div class="swiper-container" id="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../libs/images/notic1.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../libs/images/notic1.png"/>
        </div>
        <div class="swiper-slide">
          <img src="../../libs/images/notic1.png"/>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Button-->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!--快捷操作-->
    <div class="quickOption">
      <div class="quickOption_title clearfiex">
        <h1 class="fl">快捷操作</h1>
        <span class="fr"><Icon type="gear-b"></Icon>修改</span>
      </div>
      <div class="quickOption_card">
        <Row :gutter="30">
          <Col :md="6" :sm="8" :xs="12">
            <Card>
              <div class="card" style="text-align:center;padding: 0">
                <router-link to="/office/monthApply" >
                   <h3><span class="icon icon_office"><Icon type="ios-calculator"></Icon></span> 月度需求</h3>
                </router-link>
              </div>
            </Card>
          </Col>
          <Col :md="6" :sm="8" :xs="12">
            <Card>
              <div class="card" style="text-align:center">
                <router-link to="/office/useApply" >
                   <h3><span class="icon icon_office"><Icon type="ios-calculator"></Icon></span> 办公领用</h3>
                </router-link>
              </div>
            </Card>
          </Col>
          </Col>
          <Col :md="6" :sm="8" :xs="12">
            <Card>
              <div class="card" style="text-align:center">
                <router-link to="/office/acuteApply" >
                    <h3><span class="icon icon_office"><Icon type="ios-calculator"></Icon></span> 急性申请</h3>
                </router-link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
    mounted:function(){
      var swiperObj =  new Swiper('#swiper', {
          loop: true,
          speed:500,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        autoplayDisableOnInteraction:false,
        simulateTouch : true,
        paginationClickable: true,
        touchReleaseOnEdges:true,
        effect : 'slide',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
        });
    }
  }
</script>
<style>
</style>
