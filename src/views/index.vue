<style scoped>

</style>
<template>
  <div class="index">
    <header></header>
  </div>
</template>
<script type="text/ecmascript-6">
  //导入获取cookie方法，判断用户是否登录
  import  utils  from '../libs/util';
  export default {
//        组件加载完闭之后
    mounted:()=> {
      let userInfo = utils.getCookie("oa_userInfo");
      if(!userInfo){ window.location.href="/logIn"}

      console.log(userInfo);
    },
    methods: {},

  };
</script>
