<template>

  <div class="index_Menu">
      <dl v-for="(value,key) in  items" v-if="menuActive.indexOf(value.type)>=0">
        <dt @click="openItem(key)" :class="value.isActive ? 'iTem_active' :''"><span><i class="iconfont icon-jisuanqi" style="font-size: 24px"></i></span><strong>{{value.title}}</strong><em><i class="iconfont icon-you" style="font-size: 14px"></i></em></dt>
        <div class="menu_list" :style="{height:value.height}">
          <dd class="menu-list_item" v-for="(v,k) in value.Children" @click="checkItem($event,k)" :class="{'active':menuActive==v.url}"><router-link :to="v.url">{{v.name}}</router-link></dd>
        </div>
      </dl>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        menuActive:'',
        items:[
          {
            title:"办公用品管理",
            classID:1,
            isActive:false,
            type:'office',
            Children:[
              {
                name:"月度需求申请",
                url:"/office/monthApply"
              },
              {
                name:"办公用品领用申请",
                url:"/office/useApply"
              },
              {
                name:"临时急性物品申请",
                url:"/office/acuteApply"
              },
              {
                name:"月度需求审批",
                url:"/office/monthApproval"
              },
              {
                name:"办公用品领用审批",
                url:"/office/useApproval"
              },
              {
                name:"临时急性物品审批",
                url:"/office/acuteApproval"
              },
              {
                name:'我的添加栏',
                url:'/office/pendApply'
              },
              {
                name:"查看我的办公用品审批进度",
                url:'/office/myProgress'
              }
            ]
          },
          {
            title:"车辆管理",
            classID:1,
            isActive:false,
            type:'car',
            Children:[
              {
                name:"车辆管理（行政）",
                url:"/car/carManageMent"
              },
              {
                name:"买卖战车",
                url:"aon"
              },
              {
                name:"归还战车",
                url:"atai"
              }

            ]
          },
          {
            title:"固定资产管理",
            classID:1,
            isActive:false,
            Children:[
              {
                name:"卖屁股",
                url:"mda"
              },
              {
                name:"买屁股",
                url:"aon"
              },
              {
                name:"买卖屁股",
                url:"atai"
              }

            ]
          },
        ],
        addClass_item:''
      }
    },
    created (){
      this.getRouter();
    },
//    组件加载完毕之后
    mounted:function(){
      for (var i=0;i<this.items.length;i++)
        if(this.menuActive.indexOf(this.items[i].type)>=0){
          this.openItem(i)
        }
    },
    methods:{
      openItem:function (key) {
        var that=this;
        var newItmes=[];
        this.items.map((value,index)=>{
              if(index == key){
                value.isActive=!value.isActive;
                if(value.isActive==true)value.height=value.Children.length*40+'px';
                else value.height=value.Children.length*0+'px';
                newItmes.push(value)
              }else{
                value.isActive=false;
                value.height=value.Children.length*0+'px';
                newItmes.push(value)
              }
        });
        this.items=newItmes;
      },
      checkItem:function (event) {
        if(this.addClass_item){this.addClass_item.removeClass('itemContent');this.addClass_item=$(event.target);}
        else this.addClass_item=$(event.target);
        $(event.target).addClass('itemContent');
      },
      getRouter:function () {
        //      获取当前路由信息，决定加载哪个左侧栏
        this.menuActive=this.$route.path
      }
    },
    watch: {
      "$route": "getRouter"
    }
  }
</script>
<style scoped>


  .index_Menu{
    width: 260px;
    background-color: #fafafc;
    height: 800px;
    overflow: auto;
  }
  .index_Menu dl{
    width: 260px;
  }
  .index_Menu dl dt{
    overflow: hidden;
    height: 65px;
    line-height: 65px;
    text-align: center;
    width: 260px;
    margin: 0 auto;
    font-size: 14px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
  }
  .index_Menu dl dt span{
    display: inline-block;
    height: 40px;
    width: 40px;
    float: left;
    margin-top: 13px;
    line-height: 40px;
    background-color:#6bc1ff;
    color: #FFFFff;
    border-radius: 3px;
    margin-left: 20px;
  }
  .index_Menu dl dt strong{
    display: inline-block;
    float: left;
    margin-left: 10px;
    font-weight: 500;
  }
  .index_Menu dl dt em{
    display: inline-block;
    float: right;
    margin-right: 10px;
  }
  .iTem_active{
    background-color: #dfedf9;
  }
  .iTem_active em{
    transform:rotate(90deg);
    transition: all .3s linear;
  }
  .iTem_active em i{
    color:#38adff;
  }
  .menu_list{
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: all .2s linear;
  }
  .menu-list_item{
    width: 100%;
    text-indent: 60px;
    height: 40px;
    line-height: 40px;
    cursor: hand;

  }
  .menu-list_item a{
    color: #495060;
  }
  .active a{
    color: #C53929;
  }
  .itemContent{
    color: #38adff;
  }


</style>
