<template>
      <div>
        <div class="moduleCard" v-for="(v,k) in item">

            <div class="moduleCard_header">
                  {{v.title}}
            </div>
          <div class="moduleCard_Content">
            <div class="quickOption_card">
              <Row :gutter="30">
                <Col :md="8" :sm="8" :xs="12" v-for="(value,keys) in v.Children">
                <Card>
                  <div class="card" style="text-align:center">
                    <router-link :to="value.url" >
                      <h3><span class="icon icon_office"><Icon type="ios-calculator"></Icon></span> {{value.name}}</h3>
                    </router-link>
                  </div>
                </Card>
                </Col>



              </Row>
            </div>

          </div>
        </div>
      </div>
</template>
<script>

  export  default {
    props:['items'],
    data(){
      return{
        item:this.items
      }
    },
    mounted:function () {

    }
  }
</script>
<style>
  .moduleCard{
    width: 100%;
    margin:0 auto;
    overflow: hidden;
  }
  .moduleCard .moduleCard_header{
      height: 60px;
      line-height: 60px;
      font-size: 16px;
      font-family:"微软雅黑";
  }
  .moduleCard_tips{
    height:60px;
    line-height: 60px;
    text-align: center;
    background: #f66;
    width: 200px;
    color: #fff;
  }


  .quickOption_card .card{

    cursor: pointer;

  }
  .quickOption_card h3{
    color: #787878;
    font-size: 14px;
    font-weight:500;
  }
  .quickOption_card .card h3:hover{
    color: #C53929;
  }
  .quickOption_card span{
    margin-left: 10px;
    margin-top: -5px;
    float: left;

  }
  .quickOption_card .icon{
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 26px;
    border-radius: 5px;
    color: #fff;
  }
  .quickOption_card .icon_office{
    background: #F7B55E;
  }
  .quickOption_card .ivu-card-body{
    padding: 16px 0;
  }

  .quickOption_card .ivu-col{
      margin-top: 10px;
  }
  @media screen and (max-width: 640px) {

     .quickOption_card .icon{
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
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
     .quickOption_card .icon{
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
