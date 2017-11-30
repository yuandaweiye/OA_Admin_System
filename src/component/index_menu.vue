<template>
  <div class="index_Menu">
      <dl v-for="(value,key) in  items">
        <dt @click="openItem(key)" :class="value.isActive ? 'iTem_active' :''"><span><i class="iconfont icon-jisuanqi" style="font-size: 24px"></i></span><strong>{{value.title}}</strong><em><i class="iconfont icon-you" style="font-size: 14px"></i></em></dt>
        <div class="menu_list" :style="{height:value.height}">
          <dd class="menu-list_item" v-for="(v,k) in value.Children" @click="checkItem($event,k)">{{v.name}}</dd>
        </div>
      </dl>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        items:[
          {
            title:"办公商品管理",
            classID:1,
            isActive:false,
            Children:[
              {
                name:"月度需求申请",
                url:"mda"
              },
              {
                name:"办公用品领用申请",
                url:"aon"
              },
              {
                name:"临时急性物品申请",
                url:"atai"
              }

            ]
          },
          {
            title:"车辆管理",
            classID:1,
            isActive:false,
            Children:[
              {
                name:"租借战车",
                url:"mda"
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
//    组件加载完毕之后
    mounted:function(){},
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
      }
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
  .itemContent{
    color: #38adff;
  }


</style>
