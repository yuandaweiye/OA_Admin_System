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
          <Tabs type="card" :value="tabVau" @on-click="getTab">
            <Tab-pane label="办公用品申请" name="office">
              <div style="overflow-x: auto">
                <i-table :border="showBorder" :loading="loading" :stripe="showStripe" :show-header="showHeader"  :data="stocks" :columns="stockConfig" style="min-width: 600px; "></i-table>
              </div></i-table>
            </Tab-pane>
            <Tab-pane label="劳保用品申请" name="work">
              <div style="overflow-x: auto">
                <i-table :border="showBorder" :loading="loading" :stripe="showStripe" :show-header="showHeader"  :data="stocks" :columns="stockConfig" style="min-width: 600px; "></i-table>
              </div>
            </Tab-pane>
            <Tab-pane label="招待用品申请" name="receptions">
              <div style="overflow-x: auto">
                <i-table :border="showBorder" :loading="loading" :stripe="showStripe" :show-header="showHeader"  :data="stocks" :columns="stockConfig" style="min-width: 600px; "></i-table>
              </div>
            </Tab-pane>
          </Tabs>
        </i-col>
        <i-col  :sm="0" :xs="0">
          <i-input>
            <i-select :model.sync="selectVau" slot="prepend" >
              <i-option value="office">办公用品</i-option>
              <i-option value="work">劳保用品</i-option>
              <i-option value="receptions">招待用品</i-option>
            </i-select>
            <i-button slot="append" icon="ios-search"></i-button>
          </i-input>
        </i-col>
      </Row>
    </div>
    <!--table-->
    <div class="table_page">
      <Page :total="totalPage" :page-size="10" @on-change="getStock" v-show="stocks.length>0"></Page>
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
        totalPage: 0,
        loading:false,
        tabVau:'office',
        selectVau:'office',
        a:8,
        stocks:[],
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
            width:'35%',
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
            title:'申请数量',
            key:'num',
            width:'15%',
            align:'center',
            "sortable": false,
            render (h, params){
              return h('p', [
                  h('Input-number',{
                    props: {
                      size: 'small',
                      value: params.row.num
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
            render (h, params) {
              return  h('p', [
                h('Button', {
                  props: {
                    type: 'default',
                    size: 'large'
                  },
                  style: {
                  },
                  on: {
                    click: function (a) {
                      console.log(params.index)
                      var numEle=document.querySelectorAll(".officeApply tbody tr");
                      console.log(numEle)
                    }
                  }
                }, '申请')
              ]);
            }
          }
        ]
      }
    },
    created () {
        this.getStock()
        this.$Message.config({
          top: 200
        });
    },
    computed: {
      _stockConfig:{
          set: function(value) {
            this.stockConfig = value;
          },
          get: function() {
            return this.stockConfig
          }
        }
    },
    mounted () {
    },
    methods:{
      getStock (page) {
        page=page && typeof page == "number"?{"page":page}:null
        this.stocks=[]
        this.loading=true
        this.$api.get('/api.php/index/kindex',page,r=>{
              console.log(r)
              if(r.status==1){
                  for(var item in r.data){
                    r.data[item].num=0
                    this.stocks.push(r.data[item])
                  }
                this.totalPage=parseInt(r.count)
                console.log(this.stocks)
              }
          this.loading=false
        },e=>{
          this.loading=false
          this.$Message.destroy()
          this.$Message.error({content:'网络不稳定，请求失败',duration:2})
        })
      },
      getTab (res) {
        console.log(res)
      }
    },
    watch:{

    }
  }
</script>
