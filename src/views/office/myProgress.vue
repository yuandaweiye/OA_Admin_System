<style>
  .myProgress .ivu-table-cell{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .myProgress .tip{
    margin: 20px 0;
  }
</style>
<template>
  <div class="myProgress">
    <Tabs  v-model="names.month">
      <TabPane :label="label1" name="month">
          <div style="width: 100%;overflow: auto">
            <Table border ref="month" :columns="config" :data="data1" highlight-row @on-row-click="selectRow" style="min-width: 700px"></Table>
          </div>
      </TabPane>
      <TabPane :label="label2" name="office">
        <div style="width: 100%;overflow: auto">
          <Table border ref="office" :columns="config" :data="data2"  highlight-row @on-row-click="selectRow" style="min-width: 700px"></Table>
        </div>
      </TabPane>
      <TabPane :label="label3" name="acute">
        <div style="width: 100%;overflow: auto">
          <Table border ref="acute" :columns="config" :data="data3" highlight-row @on-row-click="selectRow"  style="min-width: 700px"></Table>
        </div>
      </TabPane>
    </Tabs>
    <p class="tip"><span class="red">小提示：</span>点击表中数据可查看审批进度</p>
    <!--审批进度模态框-->
    <Modal v-model="progress" :closable="false">
        <div>
          <Steps :current="progressObj.loop" :status="progressObj.ju>0?'error':'process'" >
            <Step title="部门主管" content=""></Step>
            <Step title="部门经理" content=""></Step>
            <Step title="行政中心" content=""></Step>
            <Step title="财务中心" content="" v-if="progressObj.type!=0"></Step>
            <Step title="总经理" content="" v-if="progressObj.type!=0"></Step>
            <Step title="董事办" content="" v-if="progressObj.type!=0"></Step>
          </Steps>
        </div>
        <p slot="footer" style="text-align: center">
          <Button type="primary" @click="cancel">我知道了</Button>
        </p>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        label1:'月度需求审批进度',
        label2:'办公用品领用审批进度',
        label3:'临时急性物资审批进度',
        progress:false,
        progressObj:{
          type:-1,
          loop:0,
          ju:0
        },
        names:{
          month:'month',
          office:'office',
          acute:'acute'
        },
        data1:[
          {
            id:'1',
            wname:'笔',
            num:'5',
            type:3,
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            loop:3,
            ju:0,
            time:'2017-12-14',
            content:'申请一只笔',
            status:0
          },
          {
            id:'12',
            type:3,
            wname:'笔2',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            loop:3,
            ju:1,
            time:'2017-12-14',
            content:'申请一只笔',
            status:2
          },
          {
            id:'13',
            type:3,
            wname:'笔3',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            loop:6,
            ju:0,
            time:'2017-12-14',
            content:'申请一只笔',
            status:1
          }
        ],
        data2:[
          {
            id:'1',
            type:0,
            wname:'中笔',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            loop:2,
            ju:0,
            time:'2017-12-14',
            content:'申请一只笔飒飒',
            status:'待审批'
          },
          {
            id:'12',
            type:0,
            loop:3,
            ju:0,
            wname:'笔2',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
            status:'被拒绝'
          },
          {
            id:'13',
            type:0,
            loop:1,
            ju:1,
            wname:'笔3',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
            status:'已通过'
          }
        ],
        data3:[
          {
            id:'1',
            wname:'笔',
            type:1,
            loop:4,
            ju:0,
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
            status:'待审批'
          },
          {
            id:'12',
            type:1,
            loop:5,
            ju:5,
            wname:'笔2',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
            status:'被拒绝'
          },
          {
            id:'13',
            type:1,
            ju:0,
            loop:6,
            wname:'笔3',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
            status:'已通过'
          }
        ],
        config:[
          {
            title:'编号',
            key:'id',
            width:'5%',
            align:'center'
          },
          {
            title:'物品名称',
            key:'wname',
            align:'center'
          },
          {
            title:'申请数量',
            key:'num',
            align:'center'
          },
          {
            title:'规格',
            key:"xing",
            align:'center'
          },
          {
            title:'预估单价',
            key:'unit',
            align:'center'
          },
          {
            title:'申请人',
            key:'uname',
            align:'center'
          },
          {
            title:'所属部门',
            key:'ment',
            align:'center'
          },
          {
            title:'申请时间',
            key:'time',
            align:'center'
          },
          {
            title:'备注',
            key:"content",
            align:'center'
          },
          {
            title:'状态',
            key:'status',
            align:'center',
            render: (h, params)=>{
              var name='',type='';
              if((params.row.ju==0 && params.row.loop==6 && params.row.type!=0) || (params.row.ju==0 && params.row.loop==3 && params.row.type==0) ){
                name="已通过";
                type="success"
              }else if(params.row.ju>0){
                name="被拒绝";
                type="error";
              }else{
                name="待审批";
                type="default";
              }
            return h('div', [
                h('Button',{
                  props: {
                    type: type
                  }
                },name)
              ]
            )
          }
          }
        ]
      }
    },
    methods :{
      selectRow (data) {
        this.progress=true;
        this.progressObj.type=data.type;
        this.progressObj.loop=data.loop;
        this.progressObj.ju=data.ju;

      },
      cancel () {
          this.progress=false;
          this.$refs.month.clearCurrentRow();
          this.$refs.office.clearCurrentRow();
          this.$refs.acute.clearCurrentRow();
      }
    }
  }
</script>
