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
}
.clearfiex:after{
  clear: both;
  display: block;
  content: '';
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
.margin-t-20{
   margin-top:20px !important;
 }
.margin-b-5{
  margin-bottom:5px !important;
}
</style>
