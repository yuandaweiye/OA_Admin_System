<template>
    <div class="tool_content">
      <table-List></table-List>
    </div>
</template>
<script>
  import { Table } from 'iview';
  import  tableList from  '../../component/tablelist.vue';
  export default {
    data(){
      return {

      }
    },


    components:{
      "tableList":tableList,
    },
  }
</script>
<style>
  .tool_content{
    overflow: hidden;
  }
</style>
