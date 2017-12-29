
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
    .alterQuick {
      display: none;
    }
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
    .alterQuick {
      display: block;
    }
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
        <span class="fr alterQuick" @click="showQuick"><Icon type="gear-b"></Icon>修改</span>
      </div>
      <div class="quickOption_card">
        <Row :gutter="30">
          <Col :md="6" :sm="8" :xs="12" v-for="(val,item) in columnList">
            <Card>
              <div class="card" style="text-align:center;padding: 0">
                <router-link :to="val.url" >
                   <h3><span class="icon icon_office"><Icon type="ios-calculator"></Icon></span> {{val.label}}</h3>
                </router-link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>

    <!--修改快捷操作模态框-->
    <Modal v-model="quickModel" :closable="false" width="700" :mask-closable="false">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="navicon"></Icon>
        <span>快捷菜单修改</span>
      </p>
      <div >
        <Transfer
          :data="totalColumn"
          :target-keys="curColumn"
          filterable
          :titles="columnTitle"
          @on-change="selectColumn" not-found-text="暂无栏目菜单" :list-style="listStyle" filter-placeholder="请输入要搜索的栏目"></Transfer>
      </div>
      <div slot="footer" style="text-align:center">
        <Button type="primary" @click="alterQuick">确认</Button>
        <Button type="default" @click="hideQuick">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data () {
      return {
        quickModel:false,
        columnTitle:['总栏目','添加为快捷栏目'],
        columnList:[],
        totalColumn: [
          {
            key:1,
            label:"月度需求申请",
            url:"/office/monthApply"
          },
          {
            key:2,
            label:"办公用品领用申请",
            url:"/office/useApply"
          },
          {
            key:3,
            label:"临时急性物品申请",
            url:"/office/acuteApply"
          },
          {
            key:4,
            label:"月度需求审批",
            url:"/office/monthApproval"
          },
          {
            key:5,
            label:"办公用品领用审批",
            url:"/office/useApproval"
          },
          {
            key:6,
            label:"临时急性物品审批",
            url:"/office/acuteApproval"
          },
          {
            key:7,
            label:"查看我的办公用品审批进度",
            url:'/office/myProgress'
          },
          {
            key:8,
            label:"车辆管理（行政）",
            url:"/car/carManageMent"
          }
        ],
        curColumn: [],
        listStyle: {
          width: '45%',
          height: '400px'
        },
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
    },
    methods: {
      showQuick () {
        this.quickModel=true;
      },
      alterQuick () {
        console.log(this.curColumn)
        for(var i=0;i<this.curColumn.length;i++){
          this.columnList.push(this.totalColumn[this.curColumn[i]-1]);
        }
        console.log(this.columnList);
        this.hideQuick();
      },
      selectColumn (newTargetKeys,b,moveKeys) {
        this.curColumn = newTargetKeys;
      },
      hideQuick () {
        this.quickModel=false;
      }
    }
  }
</script>
<style>
</style>
