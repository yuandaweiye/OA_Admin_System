<template>
  <div class="app_Content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

  /*动画样式*/
  .ivu-loading-bar{
    z-index: 3000 !important;
  }
  .ivu-spin-fix{
    background-color: rgba(255,255,255,1);
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }

   .ivu-card-head{
    background: #38ADFF;
    color: #fff;
    text-align: center;
  }
  .ivu-card-head p{
    font-size: 16px;
    color: #fff;
  }


.app_Content{
    height: 100%;
    width: 100%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  color: #42b983;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
body{
  font-size: 12px;
  background: #E7E8EB ;
  overflow: hidden;
}
.clearfiex:after{
  clear: both;
  display: block;
  content: '';
}




/*font*/
.fontSize-12{
  font-size: 12px !important;
}
.fontSize-14{
  font-size: 14px !important;
}
.fontSize-16{
  font-size: 16px !important;
}

/*bold*/
.text-bold{
  font-weight: 600;
}


.color-error{
  color: #ED3F14 !important;
}
.color-warn{
  color: #FF9900 !important;
}
.color-success{
color: #19BE6B !important;
}
.color-info{
  color: #2DB7F5 !important;
}

.red{
  color:  #C53929 !important;
}

.width-260{
  width: 260px !important;
}
.text-al-center{
  text-align: center !important;
}

.padding-1-5{
  padding-left: 5px !important;
}

.margin-l-10{
  margin-left: 10px !important;
}
.margin-r-10{
  margin-right: 10px !important;
}
.margin-l-10{
  margin-left: 10px !important;
}
.margin-r-10{
   margin-right: 10px !important;
}
.margin-r-20{
  margin-right: 20px !important;
}
.margin-t-20{
   margin-top:20px !important;
 }
.margin-b-5{
  margin-bottom:5px !important;
}
</style>
