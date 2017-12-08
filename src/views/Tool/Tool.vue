<template>
    <div class="tool_content">

      <module-Card></module-Card>
    </div>
</template>
<script>
  import { Table } from 'iview';
  import  tableList from  '../../component/tablelist.vue';
  import  moduleCard from  '../../component/modulecard.vue';
  export default {
    data(){
      return {
      }
    },


    components:{
      "tableList":tableList,
      moduleCard
    },
  }
</script>
<style>
  .tool_content{
    overflow: hidden;
  }
</style>
