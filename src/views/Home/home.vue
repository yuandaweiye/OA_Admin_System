<template>
  <div>
    <Carousel :current-index="0" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :trigger="setting.trigger" :arrow="setting.arrow">
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../libs/images/notic1.png" alt="公告">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../libs/images/notic1.png" alt="公告">
        </div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">
          <img src="../../libs/images/notic1.png" alt="公告">
        </div>
      </Carousel-item>
    </Carousel>
  </div>
</template>
<script type="text/ecmascript-6">
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
  }
</script>
<style>
</style>
