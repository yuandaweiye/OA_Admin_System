<style>
  .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
    border-radius: 0;
    background: #fff;
  }
  .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
    border-top: 1px solid #3399ff;
  }
  .tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
  }

  .table_page{
    text-align: center;
    margin-top: 20px;
  }
  .tab_header{
    position: relative;
  }
  .tab_search{
    position: absolute;
    right: 10px;
    top:0;
  }

  /*温馨提示*/
  .useApply .tip{
    margin: 20px 0;
  }

  /*增加搜索框样式*/
  .useApply .ivu-icon-search{
    cursor: pointer;
  }

  /*修改表格默认样式*/
  .useApply .ivu-table-cell{
    padding: 0 !important;
  }
  .useApply .ivu-input-number-input{
    border: none !important;
    text-align: center;
  }
  .useApply .ivu-btn-large{
    padding-top: 3px !important;
    padding-bottom: 3px !important;
  }
  .useApply .ivu-spin-fix{
    background-color: hsla(0,0%,100%,1);
  }

  @media screen  and (max-width: 992px) {
    .tab_search{
      display: none !important;
    }
  }
</style>
<template>
  <div class="useApply">
    <div class="tab_header">
      <Row :gutter="32">
        <i-col :sm="24" :xs="24" class="tabs-style">
          <Tabs type="card" v-model="tabVau">
            <Tab-pane label="办公用品申请" name="1">
              <!--办公用品申请-->
              <div style="overflow-x: auto">
                <Table :border="true" :loading="office.loading"  :data="office.data" :columns="stockConfig" style="min-width: 500px; "></Table>
              </div>
              <!--温馨提示-->
              <p class="tip"><span class="red">小提示：</span>添加成功后还需去<b class="red">待申请栏目</b>确认才能申请审批哦</p>
              <!--table-->
              <div class="table_page">
                <Page :total="office.page.totalPage"  :current="office.page.curPage" :page-size="10" show-total @on-change="getStock1" v-show="office.data.length>0"></Page>
              </div>
            </Tab-pane>
            <Tab-pane label="劳保用品申请" name="2">
              <!--劳保用品申请-->
              <div style="overflow-x: auto">
                <Table :border="true" :loading="labor.loading" :data="labor.data" :columns="stockConfig" style="min-width: 500px; "></Table>
              </div>
              <!--温馨提示-->
              <p class="tip"><span class="red">小提示：</span>添加成功后还需去<b class="red">待申请栏目</b>确认才能申请审批哦</p>
              <!--table-->
              <div class="table_page">
                <Page :total="labor.page.totalPage"  :current="labor.page.curPage" :page-size="10" show-total @on-change="getStock2" v-show="labor.data.length>0"></Page>
              </div>
            </Tab-pane>
            <Tab-pane label="招待用品申请" name="3">
              <!--招待用品申请-->
              <div style="overflow-x: auto">
                <Table :border="true" :loading="entertain.loading" :data="entertain.data" :columns="stockConfig" style="min-width: 500px; "></Table>
              </div>
              <!--温馨提示-->
              <p class="tip"><span class="red">小提示：</span>添加成功后还需去<b class="red">待申请栏目</b>确认才能申请审批哦</p>
              <!--table-->
              <div class="table_page">
                <Page :total="entertain.page.totalPage" :current="entertain.page.curPage" :page-size="10" show-total @on-change="getStock3" v-show="entertain.data.length>0"></Page>
              </div>
            </Tab-pane>
            <Tab-pane label="搜索结果" name="4" v-if="searchs.show">
              <div style="overflow-x: auto" v-show="searchs.data.length>0">
                <Table :border="true" :loading="searchs.loading" :data="searchs.data" :columns="stockConfig" style="min-width: 500px; "></Table>
              </div>
              <p class="tip" v-html="searchs.tip"></p>
            </Tab-pane>
          </Tabs>
        </i-col>
      </Row>

      <div  class="tab_search">
        <Input v-model="searchs.searchVau" icon="search" placeholder="请输入你要搜索的库存" @on-blur="blurSearch" @on-keyup="keySearch"/>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        office:{
          data:[],
          loading:false,
          page:{
            totalPage:0,
            curPage:0
          }
        },
        labor:{
          data:[],
          loading:false,
          page:{
            totalPage:0,
            curPage:0
          }
        },
        entertain:{
          data:[],
          loading:false,
          page:{
            totalPage:0,
            curPage:0
          }
        },
        tabVau:'1',
        searchs:{
          show:false,
          searchVau:'',        //搜索数据
          oriVau:'',            //原搜索数据(防止同样搜索字段多次搜索)
          priTab:'',           //搜索前tab值
          loading:'',
          data:[],
          tip:''
        },
        stockConfig:[
          {
            title: '编号',
            key: 'id',
            width:'10%',
            align:'center',
            "sortable": false,
          },
          {
            title: '品名',
            key: 'name',
            align:'center',
            "sortable": false
          },
          {
            title: '库存',
            key: 'number',
            width:'12%',
            align:'center',
            "sortable": false,
            render: (h, params) => {
              if(params.row.number && params.row.number!='') {
                return h('div', [
                  h('strong', params.row.number + params.row.com)
                ]);
              }else{
                return h('div', [
                  h('strong', '暂无')
                ]);
              }
            }
          },
          {
            title: '单价',
              key: 'unit',
            width:'14%',
            align:'center',
            "sortable": false,
            render: (h, params) => {
            if(params.row.unit && params.row.unit!=''){
              return h('div', [
                h('strong', params.row.unit+'/元')
              ]);
            }else{
              return h('div', [
                h('strong', params.row.unit)
              ]);
            }
          }
          },
          {
            title:'数量',
              key:'num',
            width:'16%',
            align:'center',
            "sortable": false,
            render: (h, params)=>{
            return h('p', [
                h('Input-number',{
                  props: {
                    size: 'small',
                    value: 0,
                    min:0,
                    max:100,
                    precision:0
                  },
                  style: {
                    'width':'100%',
                    'border':'none'
                  }
                })
              ]
            )
          }
          },
          {
            title: '操作',
              key: 'action',
            align: 'center',
            width:'16%',
            render: (h, params) => {
            return  h('div', [
              h('Button', {
                props: {
                  type: 'default',
                  size: 'large',
                  class:'a'
                },
                on: {
                  click: (e) => {
                  var numEle=$(e.target).parents("td").prev().find("input").val();
                 if(numEle){
                numEle=parseInt(numEle);
                if(numEle>0){
                  var type=''
                  switch (params.row.x_type){
                    case '1':
                      type='办公用品';
                      break;
                    case '2':
                      type='劳保用品';
                      break;
                    case '3':
                      type='招待用品';
                      break;
                    default:
                      type='不详';
                      break;
                  }
                  this.confirm("办公用品领用添加提示","<p>添加编号：<span class='red'>"+params.row.id+"</span></p><p>添加名称：<span class='red'>"+params.row.name+"</span></p><p>添加数量：<span class='red'>"+numEle+"</span></p><p>添加类型：<span class='red'>"+type+"</span></p><p style='color: #f00'>是否添加？</p>",e=>{
                    if(e){
                      this.$api.get('/api.php/index/badd',{"id":params.row.id,"uid":this.$userInfo.id,"x_type":params.row.x_type,"type":0,"num":numEle},r=>{
                        if(r.status==1){
                          this.$Message.destroy();
                          this.$Message.success({content:'添加成功',duration:2,closable:true})
                          switch (this.tabVau){
                            case '1':
                              this.getStock1(this.office.page.curPage);
                              break;
                            case '2':
                              this.getStock2(this.labor.page.curPage);
                              break;
                            case '3':
                              this.getStock3(this.entertain.page.curPage);
                              break;
                          }
                        }else{
                          this.$Message.destroy();
                          this.$Message.error({content:'添加失败：'+r.message,duration:2,closable:true})
                        }
                      },e=>{
                        this.$Message.destroy();
                        this.$Message.error({content:'网络不稳定，请求失败',duration:2,closable:true})
                      })
                    }
                  });
                }else{
                  this.$Message.destroy();
                  this.$Message.warning({content:'数量不能为空',duration:2,closable:true})
                }
              }
                  }
             }
          }, '添加')
          ])
          }
          }
        ]
      }
    },
    created () {
      this.getStock1();     //办公用品库存信息
      this.getStock2();    //劳保用品库存信息
      this.getStock3();     //招待用品库存信息
    },
    methods:{
      getStock1 (page) {
        page=page && typeof page == "number"?page:null;
        this.office.data=[];
        this.office.loading=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":1},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.office.data.push(r.data[item])
            }
            this.office.page.curPage=parseInt(r.thisPage);
            this.office.page.totalPage=parseInt(r.count);
          }
          this.office.loading=false
        },e=>{
          this.office.loading=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2,closable:true})
        })
      },
      getStock2 (page) {
        page=page && typeof page == "number"?page:null;
        this.labor.data=[];
        this.labor.loading=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":2},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.labor.data.push(r.data[item])
            }
            this.labor.page.curPage=parseInt(r.thisPage);
            this.labor.page.totalPage=parseInt(r.count);
          }
          this.labor.loading=false
        },e=>{
          this.labor.loading=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2,closable:true})
        })
      },
      getStock3 (page) {
        page=page && typeof page == "number"?page:null;
        this.entertain.data=[];
        this.entertain.loading=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":3},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.entertain.data.push(r.data[item])
            }
            this.entertain.page.curPage=parseInt(r.thisPage);
            this.entertain.page.totalPage=parseInt(r.count);
          }
          this.entertain.loading=false
        },e=>{
          this.entertain.loading=false
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2,closable:true})
        })
      },
      blurSearch () {
        //  搜索框失去焦点搜索库存
        if(this.searchs.oriVau!=this.searchs.searchVau){
          this.search();
        }
      },
      keySearch (e) {
        //按下回车键搜索库存
        if(e.keyCode==13){
          //调取搜索接口
          if(this.searchs.oriVau!=this.searchs.searchVau){
            this.search();
          }
        }
      },
      search () {
        if(this.tabVau!='4'){
          this.searchs.priTab=this.tabVau;
        }
        if(this.searchs.searchVau && this.searchs.searchVau!=''){
          this.searchs.show=true;
          this.tabVau='4';
          this.searchs.data=[];
          this.searchs.loading='';
          this.searchs.loading=true;
          //调取搜索接口
          this.getSearch();
        }else{
          this.searchs.show=false;
          this.searchs.tip='';
          this.tabVau=this.searchs.priTab==''?'1':this.searchs.priTab;
        }
        this.searchs.oriVau=this.searchs.searchVau;
      },
      getSearch () {
        this.searchs.tip='<span style="text-align: center;display: block">搜索中···</span>';
        this.$api.get('/api.php/index/bsou',{"name":this.searchs.searchVau},r=>{
          if(r.status==1){
            this.searchs.data=r.data;
            this.searchs.tip='小提示：</span>添加成功后还需去<b class="red">待申请栏目</b>确认才能申请审批哦';
          }else{
            this.searchs.tip='<span style="text-align: center;display: block">暂未搜索到数据</span>';
          }
          this.searchs.loading=false;
        },e=>{
          this.searchs.loading=false;
          this.searchs.tip='<span style="text-align: center;display: block">搜索失败，请稍候再试或联系管理员</span>';
        })
      },
      confirm (title,content,call) {
        this.$Modal.confirm({
            title:title,
            content: content,
            onOk: () => {
             call(true)
            },
            onCancel: () => {}
        });
      }
    }
  }
</script>
