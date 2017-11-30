<template>
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


  </div>
</template>
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

  @media screen and (max-width: 640px) {
    .swiper-pagination-bullet{
      width: 8px;
      height: 8px;
      margin: 0 5px !important;
    }
    .swiper-button-next, .swiper-button-prev{
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
  }
</style>
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
