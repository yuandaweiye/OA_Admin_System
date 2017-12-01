<template>
    <div class="tebleview">
      <!--表格头部-->
        <div class="tebleview_searchBar">
          <div class="searchBar_title">
            部门成员
          </div>
          <div class="tebleview_from">
              <input type="text" maxlength="16" placeholder="输入员工姓名...">
              <button>搜索</button>
          </div>
        </div>
      <!--表格体-->
      <Table stripe  border :columns="ths" :data="tableData"></Table>


      <div class="classPage">
        <Page :total="total"></Page>
      </div>


    </div>
</template>
<script>
  import { Table,Page} from 'iview'
  export default {
    data(){
      return {
        ths:[
          {
            title:"序号",
            key:'index'
          },
          {
            title:"姓名",
            key:'name'
          },
          {
            title:"职位",
            key:'position'
          },
          {
            title:"手机号",
            key:'phone'
          },
          {
            title:"QQ",
            key:'qqnumber'
          },
          {
            title:"Email",
            key:'email'
          },
        ],
        tableData:[
          {
            index:2,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:3,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:4,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:5,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:6,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:7,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:8,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:9,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          },
          {
            index:10,
            name:'王鹏',
            position:'前端专员',
            phone:187215231,
            qqnumber:118396308,
            email:123123123
          }
        ],
        total:100
      }
    },



    components:{}
  }
</script>
<style scoped>
  .tebleview{
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .tebleview_searchBar{
    height: 50px;
    line-height: 50px;
    display: flex;
    background-color: #38adff;
  }
  .tebleview_searchBar .searchBar_title{
    flex: 2;
    font-size: 18px;
    text-indent: 18px;
    color: #fff;
  }
  .tebleview_searchBar .tebleview_from{
    flex: 1;

  }
  .tebleview_searchBar .tebleview_from input{
    width: 60%;
    height: 30px;
    border:none;
    border-radius:15px;
    outline:none;
    text-indent:10px;
  }
  .tebleview_searchBar .tebleview_from button{
      height: 30px;
      line-height: 30px;
      text-align: center;
      width:25%;
      background-color: #fff;
      border: none;
      color: #38adff;
      margin-left: 5px;
      border-radius: 5px;
  }
  .classPage{
    margin-top: 20px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
  }
  @media screen  and (max-width: 750px){
    .tebleview{
      height: 100px;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }
    .tebleview_searchBar{
      height: 50px;
      line-height: 50px;
      display: flex;
      background-color: #38adff;
    }
    .tebleview_searchBar .searchBar_title{
      flex: 1;
      font-size: 14px;
      text-indent: 14px;
      color: #fff;
    }
    .tebleview_searchBar .tebleview_from{
      flex: 1;

    }
    .tebleview_searchBar .tebleview_from input{
      width: 60%;
      height: 30px;
      border:none;
      border-radius:15px;
      outline:none;
      text-indent:10px;
    }
    .tebleview_searchBar .tebleview_from button{
      height: 30px;
      line-height: 30px;
      text-align: center;
      width:25%;
      background-color: #fff;
      border: none;
      color: #38adff;
      margin-left: 5px;
      border-radius: 5px;
    }
  }
</style>
