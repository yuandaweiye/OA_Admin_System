<template>
    <div class="tool_content">
      <module-Card :items="items"></module-Card>
    </div>
</template>
<script>
  import { Table } from 'iview';
  import  tableList from  '../../component/tablelist.vue';
  import  moduleCard from  '../../component/modulecard.vue';
  export default {
    data(){
      return {
        items:[
          {
            title:"办公商品管理",
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
              }

            ]
          },
          {
            title:"主页",
            classID:2,
            type:'main',
            isActive:false,
            Children:[
              {
                name:"所有申请",
                iconfont:'',
                url:"/main/allApplications"
              },
              {
                name:"申请种类",
                iconfont:'',
                url:"/main/applicationClass",
              },
              {
                name:"报销申请",
                iconfont:'',
                url:"/main/applicationReim",
              },
              {
                name:"审批进度",
                iconfont:'',
                url:"/main/approvalProgress",
              },
              {
                name:"修改审批",
                iconfont:'',
                url:"/main/revisionApproval",
              },
              {
                name:"急性审批进度",
                iconfont:'',
                url:"/main/acuteAP",
              },
              {
                name:"固定审批进度",
                iconfont:'',
                url:"/main/fixedAP",
              },
              {
                name:"派车申请进度",
                iconfont:'',
                url:"/main/sacAP",
              },
              {
                name:"用户审批信息",
                iconfont:'',
                url:"/main/userAppInfo",
              },
            ]
          }
        ]


      }
    },
    components:{
      "tableList":tableList,
      "moduleCard":moduleCard
    },
  }
</script>
<style>
  .tool_content{
    overflow: hidden;
  }
</style>
