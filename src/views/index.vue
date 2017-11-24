<style scoped>

</style>
<template>
  <div class="index">
    <header></header>
  </div>
</template>
<script>
  //导入获取cookie方法，判断用户是否登录
  import  utils  from '../libs/util';
  export default {
//        组件加载完闭之后
    mounted:()=>{
      let userInfo=utils.getCookie("userInfo");
      console.log(userInfo);
//      else{location.href="/logIn"}
    },
    methods: {},

  };
</script>
