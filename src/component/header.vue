<style>
  .header{
    width: 100%;
    height: 62px;
    line-height: 62px;
    background: #fff;
  }
  .header .header_content{
    max-width: 1080px;
    margin: 0 auto;
  }
  .header .header_content .logo{
    width: 248px;
    height: 62px;
    background: url("../libs/images/logo.png") no-repeat left center;
    background-size: contain;
  }
  .header .header_content .signOut{
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
  }
  .header .header_content .signOut:hover{
    color: #C53929;
  }
  .header .header_content .signOut i{
    color: #38ADFF;
  }

  @media screen  and  (max-width: 640px) {
    .header{
      height: 44px;
      line-height: 44px;
    }
    .header .header_content .signOut{
      font-size: 12px;
    }
    .header .header_content .logo{
      height: 36px;
      margin-top: 4px;
      width: 60%;
    }
  }
  @media screen  and  (min-width: 640px) and (max-width: 992px) {
    .header{
      height: 56px ;
      line-height: 56px;
    }
    .header .header_content .signOut{
      font-size: 14px;
    }
    .header .header_content .logo{
      height: 56px ;
    }
  }


</style>
<template>
  <header class="header">
    <div class="header_content clearfiex">
      <!--logo-->
      <div class="logo fl" :xs="4">

      </div>
      <!--退出-->
      <div class="signOut fr" @click="signOut">
        <Icon type="power"></Icon> &nbsp;退出
      </div>
    </div>
  </header>
</template>
<script type="text/ecmascript-6">
  export default{
    mounted () {},
    methods :{
      signOut () {
        window.location.href='/login'
      }
    }
  }
</script>
