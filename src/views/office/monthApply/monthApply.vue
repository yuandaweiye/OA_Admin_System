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

  /*修改表格默认样式*/
 .officeApply .ivu-table-cell{
    padding: 0 !important;
  }
 .officeApply .ivu-input-number-input{
    border: none !important;
    text-align: center;
  }
  .officeApply .ivu-btn-large{
    padding-top: 3px !important;
    padding-bottom: 3px !important;
  }
  .officeApply .ivu-spin-fix{
    background-color: hsla(0,0%,100%,1);
  }

  @media screen  and (max-width: 992px) {
    .tab_search{
      display: none !important;
    }
  }

</style>
<template>
  <div class="officeApply">
    <!--tab-->
    <Row style="padding:0px 10px;margin-bottom: 5px">
      <i-col :sm="6" :xs="12" style="padding:5px 0px">
        显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
      </i-col>
      <i-col :sm="6" :xs="12" style="padding:5px 0px">
        显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
      </i-col>
      <i-col :sm="6" :xs="12" style="padding:5px 0px">
        显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
      </i-col>
    </Row>
    <div class="tab_header">
      <Row :gutter="32">
        <i-col :sm="24" :xs="24" class="tabs-style">
          <Tabs type="card" v-model="tabVau">
            <!--<Tab-pane label="库存展示" name="Stock">-->

            <!--</Tab-pane>-->
            <Tab-pane label="办公用品申请" name="office">
              <!--办公用品申请-->
                <!--<div style="overflow-x: auto">-->
                  <!--<Table :border="showBorder" :loading="loading.loading1" :stripe="showStripe" :show-header="showHeader"  :data="stockList.stocks1" :columns="stockConfig" style="min-width: 600px; "></Table>-->
                <!--</div>-->
                <!--&lt;!&ndash;table&ndash;&gt;-->
                <!--<div class="table_page">-->
                  <!--<Page :total="page.totalPage1" :page-size="20" @on-change="getStock1" v-show="stockList.stocks1.length>0"></Page>-->
                <!--</div>-->
            </Tab-pane>
            <Tab-pane label="劳保用品申请" name="work">
              <!--劳保用品申请-->
                <!--<div style="overflow-x: auto">-->
                  <!--<Table :border="showBorder" :loading="loading.loading2" :stripe="showStripe" :show-header="showHeader"  :data="stockList.stocks2" :columns="stockConfig" style="min-width: 600px; "></Table>-->
                <!--</div>-->
                <!--&lt;!&ndash;table&ndash;&gt;-->
                <!--<div class="table_page">-->
                  <!--<Page :total="page.totalPage2" :page-size="20" @on-change="getStock2" v-show="stockList.stocks2.length>0"></Page>-->
                <!--</div>-->
            </Tab-pane>
            <Tab-pane label="招待用品申请" name="receptions">
              <!--招待用品申请-->
                <!--<div style="overflow-x: auto">-->
                  <!--<Table :border="showBorder" :loading="loading.loading3" :stripe="showStripe" :show-header="showHeader"  :data="stockList.stocks3" :columns="stockConfig" style="min-width: 600px; "></Table>-->
                <!--</div>-->
                <!--&lt;!&ndash;table&ndash;&gt;-->
                <!--<div class="table_page">-->
                  <!--<Page :total="page.totalPage3" :page-size="20" @on-change="getStock3" v-show="stockList.stocks3.length>0"></Page>-->
                <!--</div>-->
            </Tab-pane>
          </Tabs>
        </i-col>
      </Row>

      <div  class="tab_search">
        <Input v-model="searchVau" icon="search" placeholder="这是搜索框"  @on-blur="search"/>
      </div>
    </div>
    <div style="overflow-x: auto">
      <Table :border="showBorder" :loading="loading.loading" :stripe="showStripe" :show-header="showHeader"  :data="stockList.stocks0" :columns="stockConfig" style="min-width: 600px; "></Table>
    </div>
    <!--table-->
    <div class="table_page">
      <Page :total="page.totalPage" :page-size="10" @on-change="getStock" v-show="stockList.stocks0.length>0"></Page>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        showBorder: true,
        showStripe: false,
        showHeader: true,
        stockList:{
          stocks0:[],
          stocks1:[],
          stocks2:[],
          stocks3:[]
        },
        page:{
          totalPage:0,
          totalPage1:0,
          totalPage2:0,
          totalPage3:0
        },
        loading:{
          loading:false,
          loading1:false,
          loading2:false,
          loading3:false
        },
        tabVau:'office',
        searchVau:'',
        a:12,
        stockConfig0:[
          {
            title: '编号',
            key: 'id',
            align:'center',
            "sortable": false,
          },
          {
            title: '品名',
            key: 'name',
            width:'40%',
            align:'center',
            "sortable": false
          },
          {
            title: '库存',
            key: 'number',
            align:'center',
            "sortable": false,
            render: (h, params) => {
              if(params.row.number && params.row.number!='') {
                return h('div', [
                  h('strong', params.row.number + params.row.com)
                ]);
              }else{
                return h('div', [
                  h('strong', params.row.number)
                ]);
              }
            }
          },
          {
            title: '单价',
            key: 'unit',
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
          }
        ],
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
            width:'30%',
            align:'center',
            "sortable": false
          },
          {
            title: '库存',
            key: 'number',
            width:'10%',
            align:'center',
            "sortable": false,
            render: (h, params) => {
              if(params.row.number && params.row.number!='') {
                return h('div', [
                  h('strong', params.row.number + params.row.com)
                ]);
              }else{
                return h('div', [
                  h('strong', params.row.number)
                ]);
              }
            }
          },
          {
            title: '单价',
            key: 'unit',
            width:'12%',
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
            title: '类型',
            key: 'x_type',
            width:'15%',
            align:'center',
            "sortable": false,
            render: (h, params) => {
              if(params.row.x_type=='1') {
                return h('div', [
                  h('strong', '办公用品')
                ]);
              }else if(params.row.x_type=='2'){
                return h('div', [
                  h('strong', '劳保用品')
                ]);
              }else if(params.row.x_type=='3'){
                return h('div', [
                  h('strong', '招待用品')
                ]);
              }else{
                return h('div', [
                  h('strong', '不详')
                ]);
              }
            }
          },
          {
            title:'申请数量',
            key:'num',
            width:'10%',
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
            render: (h, params) => {
              return  h('div', [
                h('Button', {
                  props: {
                    type: 'default',
                    size: 'large',
                    class:'a'
                  },
                  on: {
                    click: () => {
                      var numEle=document.querySelectorAll(".officeApply tbody tr")[params.index].getElementsByTagName("input")[0];
                      if(numEle){
                          numEle=parseInt(numEle.value);
                        if(numEle>0){
                          var type=''
                          switch (this.tabVau){
                            case 'office':
                                  type='办公用品';
                                  break;
                            case 'work':
                                  type='劳保用品';
                                  break;
                            case 'receptions':
                                  type='招待用品';
                                  break;
                            default:
                                  type='不详';
                                  break;
                          }
                          this.confirm("月度需求申请提示","<p>申请编号：<span class='red'>"+params.row.id+"</span></p><p>申请名称：<span class='red'>"+params.row.name+"</span></p><p>申请数量：<span class='red'>"+numEle+"</span></p><p>申请类型：<span class='red'>"+type+"</span></p><p style='color: #f00'>是否申请？</p>",e=>{
                             if(e){
                               this.$api.post('/api.php/index/badd',{"id":params.row.id,"uid":this.$userInfo.id,"type":0},r=>{
                               })
                             }
                          });
                        }else{
                          this.$Message.destroy();
                          this.$Message.warning({content:'数量不能为空',duration:2})
                        }
                      }
                    }
                  }
                }, '申请')
              ])
            }
          }
        ]
      }
    },
    created () {
        this.getStock();
        this.getStock1();
        this.getStock2();
        this.getStock3();
        this.$Message.config({
          top: 200
        });
    },
    methods:{
      getStock (page) {
        page=page && typeof page == "number"?{"page":page}:null;
        this.stockList.stocks0=[];
        this.loading.loading=true;
        this.$api.post('/api.php/index/kindex',page,r=>{
              if(r.status==1){
                  for(var item in r.data){
                    this.stockList.stocks0.push(r.data[item])
                  }
                this.page.totalPage=parseInt(r.count);
              }
          this.loading.loading=false
        },e=>{
          this.loading.loading=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2})
        })
      },
      getStock1 (page) {
        page=page && typeof page == "number"?page:null;
        this.stockList.stocks1=[];
        this.loading.loading1=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":1},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.stockList.stocks1.push(r.data[item])
            }
            this.page.totalPage1=parseInt(r.count);
          }
          this.loading.loading1=false
        },e=>{
          this.loading.loading1=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2})
        })
      },
      getStock2 (page) {
        page=page && typeof page == "number"?page:null;
        this.stockList.stocks2=[];
        this.loading.loading2=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":2},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.stockList.stocks2.push(r.data[item])
            }
            this.page.totalPage2=parseInt(r.count);
          }
          this.loading.loading2=false
        },e=>{
          this.loading.loading2=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2})
        })
      },
      getStock3 (page) {
        page=page && typeof page == "number"?page:null;
        this.stockList.stocks2=[];
        this.loading.loading3=true;
        this.$api.get('/api.php/index/bcalss',{"page":page,"type":3},r=>{
          if(r.status==1){
            for(var item in r.data){
              this.stockList.stocks3.push(r.data[item])
            }
            this.page.totalPage3=parseInt(r.count);
          }
          this.loading.loading3=false
        },e=>{
          this.loading.loading3=false;
          this.$Message.destroy();
          this.$Message.error({content:'网络不稳定，请求失败',duration:2})
        })
      },
      search () {
        if(this.searchVau && this.searchVau!=''){
          this.stocks=[]
          this.loading=true
          this.$api.get('/api.php/index/bsou',{"name":this.searchVau},r=>{
            if(r.status==1){
              for(var item in r.data){
                r.data[item].num=0
                this.stocks.push(r.data[item])
              }
              this.totalPage=parseInt(r.count)
            }
            this.loading=false
          },e=>{
            this.loading=false
            this.$Message.destroy()
            this.$Message.error({content:'网络不稳定，请求失败',duration:2})
          })
        }

      },
      confirm (title,content,call) {
        this.$Modal.confirm({
          title:title,
          content: content,
          onOk: () => {
            this.$Message.info('Clicked ok');
            call(true)
          },
          onCancel: () => {
            this.$Message.info('已取消');
          }
        });
      }
    }
  }

//  switch (this.tabVau){
//    case 'office':
//      type=1;
//      break;
//    case 'work':
//      type=2;
//      break;
//    case 'receptions':
//      type=3;
//      break;
//  }
</script>
