<template>
  <div class="pendApply">
    <Tabs :value="tabVau">
      <TabPane label="月度需求申请" name="1">
        <Dropdown trigger="click" @on-click="selectTab">
          <Button type="primary">
            {{month.dropName}}
            <Icon type="arrow-down-b"></Icon>
          </Button>
          <DropdownMenu slot="list">
            <DropdownItem name="1">办公用品</DropdownItem>
            <DropdownItem name="2">劳保用品</DropdownItem>
            <DropdownItem name="3">招待用品</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div style="overflow-x: auto;margin-top: 20px">
          <Table :border="true" :loading="month.loading"  :data="month.data" :columns="tableConfig" style="min-width: 440px; "></Table>
        </div>
        <div class="table_page">
          <Page :total="month.page.tolPage"  :current="month.page.curPage" @on-change="monthPage" :page-size="10" show-total v-show="month.data.length>0"></Page>
        </div>
      </TabPane>
      <TabPane label="办公用品领用申请" name="2">
        标签二的内容
      </TabPane>
      <TabPane label="急性物资申请" name="3">
        标签三的内容
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
    export default {
        name: "pend-apply",
        data () {
            return {
              tabVau:'1',
              panValue:{     //面板选中值
                  "month":'1',
                  "office":"1",
                  "acute":"1"
              },
              month:{
                data:[],
                dropName:'办公用品',
                x_type:'1',
                loading:false,
                page:{
                  curPage:1,
                  tolPage:1
                }
              },
              tableConfig:[
                {
                  title:'编号',
                  key:'id',
                  width:'10%',
                  align:'center',
                },
                {
                  title:'物品名称',
                  key:'wname',
                  width:'30%',
                  align:'center'
                },
                {
                  title:'添加数量',
                  key:'num',
                  width:'16%',
                  align:'center',
                  render: (h, params) => {
                    return h('div', [
                      h('strong', params.row.num + params.row.com)
                    ]);
                  }
                },
                {
                  title:'操作',
                  key:'operation',
                  align:'center',
                  render: (h, params) => {
                    return h('div', [
                      h('Button', {
                        props: {
                          type: 'default'
                        },
                        style:{
                          marginRight:'10px'
                        },
                        on: {
                          click: (e) => {
                            console.log("以点击")
                          }
                        }
                      }, '修改'),
                      h('Button', {
                        props: {
                          type: 'error',
                          style:'margin-right:5px'
                        },
                        style:{
                          marginRight:'10px'
                        },
                        on: {
                          click: (e) => {
                            console.log("以点击")
                          }
                        }
                      }, '删除'),
                      h('Button', {
                        props: {
                          type: 'primary'
                        },
                        on: {
                          click: (e) => {
                            console.log("以点击")
                          }
                        }
                      }, '申请'),
                    ])

                  }
                }
              ]
            }
        },
        created () {
        //  this.getYwait(this.$userInfo.id,1,);
        },
        methods:{
            getYwait (uid,type,x_type,page,Pagenum) {
              //获取添加栏目数据
              /**
               * @参数说明：
               *  uid:用户ID
               *  type:物品申请类型
               *  x_type:物品类型
               *  page:获取页面
               *  Pagenum:分页个数
               */
              let care={
                'uid':uid,
                'type':type,
                'x_type':x_type,
                'page':page,
                'Pagenum':Pagenum?Pagenum:10
              }
              this.$api.get('/api.php/index/ywait',care,r=>{
                  if(r.status==1){
                    console.log("获取成功")
                    switch (type) {
                      case '1':
                          this.month.data=r.data;
                          this.month.page.curPage=parseInt(r.thisPage);
                          this.month.page.tolPage=parseInt(r.count);
                          break;
                      case '2':
                          //this.
                    }
                  }else{
                    console.log("获取失败")
                  }
              },e=>{
                    console.log("请求失败")
              })
            },
            selectTab (name) {
              let names='';
              switch (name) {
                case '1':
                  names='办公用品';
                  break;
                case '2':
                  names="劳保用品";
                  break;
                case '3':
                  names="招待用品";
                  break;
              }
              switch (this.tabVau){
                case '1':
                    this.month.dropName=names;
                    break;
                case '2':
                    this.office.dropName=names;
                    break;
                case '3':
                    this.acute.dropName=names;
                    break;
              }

              this.getYwait(this.$userInfo.id,this.tabVau,name,1)
              console.log(name)
            },
            monthPage (page){
              
            }
        },

    }
</script>

<style>
  /*修改折叠面板样式*/
  .pendApply .ivu-tabs{
    min-height: 400px;
  }
  .pendApply .ivu-collapse{
    background: none;
    border: 0;
  }
  .pendApply .ivu-collapse>.ivu-collapse-item>.ivu-collapse-header{
    color: #333;
  }
  .pendApply .ivu-collapse>.ivu-collapse-item{
    border: 1px solid #dddee1;
    margin: 20px 0;
    background: #DFEDF9;
    border-radius: 5px;
  }
  /*修改下拉菜样式*/
  .pendApply .ivu-dropdown{
    margin-left: 10px;
  }
  .pendApply .ivu-dropdown-item{
    display: block;
  }
</style>
