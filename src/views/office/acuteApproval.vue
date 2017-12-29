<style>
  .acuteApproval .ivu-table-cell{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .acuteApproval .ivu-checkbox-wrapper{
    margin-right: 0 !important;
  }
  .acuteApproval .ivu-card-head{
    background: #38ADFF;
    color: #fff;
  }
  .acuteApproval .button{
    margin-top: 20px;
    text-align: center;
  }
  .acuteApprovalMotal .table{
    width: 100%;
    border: 1px solid #DDDEE1;
  }
  .acuteApprovalMotal .table thead{
    background: #F8F8F9;
  }
  .table tr th,.table tr td{
    text-align: center;
    border-right: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
    padding:6px 0;
    vertical-align: middle;
    font-size: 12px;
    box-sizing: border-box;
  }
  /*width*/
  .width-10{
    width:10% !important;
  }
  .width-20{
    width:20% !important;
  }
  .width-30{
    width:30% !important;
  }
  .width-40{
    width:40% !important;
  }

</style>
<template>
  <div class="acuteApproval">
    <Card>
      <p slot="title" style="text-align: center;color: #fff">临时急性物品审批</p>
      <div style="overflow: auto" v-tab>
        <Table ref="lists" border :columns="config" :data="list" style="min-width: 1000px" ></Table>
      </div>
      <div class="button">
        <Button type="primary" class="margin-r-20" @click="allSubmitTip(1)">一键通过</Button>
        <Button type="error" @click="allSubmitTip(2)">一键删除</Button>
      </div>
    </Card>
    <!--通过提示-->
    <Modal v-model="pass" :closable="false" @on-ok="submit(1,false)" @on-cancel="cancel">
      <p class="red fontSize-16 text-bold">是否通过申请？</p>
    </Modal>
    <!--拒绝提示-->
    <Modal v-model="refuse" :closable="false" @on-ok="submit(2,false)" @on-cancel="cancel">
      <p class="red fontSize-16 text-bold">是否拒绝申请？</p>
    </Modal>
    <!--一键通过提示-->
    <Modal v-model="allSubmit" :closable="false" width="700">
      <p slot="header" class="red fontSize-16 text-bold">是否一键{{submitList.title}}以下申请？</p>
      <div class="acuteApprovalMotal">
        <table class="table"  cellspacing="0" cellpadding="0">
          <thead>
          <tr>
            <th class="width-10">编号</th>
            <th class="width-30">物品</th>
            <th class="width-20">申请人</th>
            <th class="width-40">状态</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in submitList.data">
            <td class="width-10">{{item.id}}</td>
            <td class="width-30">{{item.wname}}</td>
            <td class="width-20">{{item.uname}}</td>
            <td class="width-40">
              <p class="color-warn" v-if="item.status==0"><Icon type="alert"></Icon>&nbsp;&nbsp;未审批</p>
              <p class="color-info" v-if="item.status==1"><Icon type="load-c" size=14 class="demo-spin-icon-load"></Icon>&nbsp;&nbsp;审批中</p>
              <p class="color-success" v-if="item.status==2"><Icon type="checkmark"></Icon>&nbsp;&nbsp;审批成功，已{{submitList.title}}</p>
              <p class="color-error" v-if="item.status==3"><Icon type="close"></Icon>&nbsp;&nbsp;审批失败</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="submit(1,true)" v-show="!getSubmit">提交</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button @click="cancel" v-show="!getSubmit">取消</Button>
        <Button type="error" @click="cancel" v-show="getSubmit">关闭</Button>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "use-approval",
    data () {
      return {
        pass:false,         //通过提示模态框
        refuse:false,       //拒绝提示模态框
        allSubmit:false,   //一键操作提示模态框
        getSubmit:false,      //是否处于提交状态
        index:-1,
        submitList:{
          title:'',
          dara:[]
        },
        list:[
          {
            id:'1',
            wname:'笔',
            num:'5',
            xing:'中性笔',
            unit:'2.5',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一只笔',
          },
          {
            id:'2',
            wname:'纸',
            num:'5',
            xing:'A4纸',
            unit:'6',
            uname:'何智能',
            ment:'信息中心',
            time:'2017-12-14',
            content:'申请一箱纸',
          }
        ],
        config:[
          {
            type: 'selection',
            width:'4%',
            align:'center'
          },
          {
            title:'编号',
            key:'id',
            width:'10%',
            align:'center'
          },
          {
            title:'物品名称',
            key:'wname',
            width:'10%',
            align:'center'
          },
          {
            title:'申请数量',
            key:'num',
            width:'8%',
            align:'center'
          },
          {
            title:'规格',
            key:'xing',
            width:'10%',
            align:'center'
          },
          {
            title:'预估单价',
            key:'unit',
            width:'8%',
            align:'center'
          },
          {
            title:'申请人',
            key:'uname',
            width:'10%',
            align:'center'
          },
          {
            title:'所属部门',
            key:'ment',
            width:'10%',
            align:'center'
          },
          {
            title:'申请时间',
            key:'time',
            width:'10%',
            align:'center'
          },
          {
            title:'备注',
            key:'content',
            width:'10%',
            align:'center'
          },
          {
            title:'操作',
            align:'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.pass=true;
                      this.index=params.index;
                    }
                  }
                }, '通过'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.refuse=true;
                      this.index=params.index;
                    }
                  }
                }, '拒绝')
              ]);
            }
          }
        ]
      }
    },
    created () {
    },
    methods:{
      allSubmitTip (type) {
        //       一键操作提示
        /*
         @参数说明
         *type:类型:1为审批通过;2为审批拒绝
         * */
        var check=false;
        if(this.$refs.lists.objData){
          this.submitList={};
          this.submitList.title='';
          this.submitList["data"]=[];
          for (var key in this.$refs.lists.objData ){
            if(this.$refs.lists.objData[key]._isChecked==true){
              check=true;
              var submits={};
              submits["id"]=this.$refs.lists.objData[key].id;
              submits["wname"]=this.$refs.lists.objData[key].wname;
              submits["uname"]=this.$refs.lists.objData[key].uname;
              submits["wid"]=this.$refs.lists.objData[key].wid;
              submits["status"]=0;
              this.submitList.data.push(submits);
            }
          }
        }
        if(check){
          this.allSubmit=true;
          if(type==1){
            this.submitList.title='通过';
          }else if(type==2){
            this.submitList.title='拒绝';
          }
        }else{
          this.$Message.destroy();
          this.$Message.warning({
            content: '请勾选你要一键操作的数据！',closable:true
          });
        }
      },
      submit (type,operation) {
        /*
         *@参数说明
         * type:类型:1为审批通过;2为审批拒绝
         * operation：操作：true为一键操作;false为单个操作
         * data：需要审批的操作的数据
         */
        if(operation){
          this.getSubmit=true;
          if(type && type==1){
            console.log("调取一键审批通过接口");
          }else if(type && type==2){
            console.log("调取一键审批拒绝接口");
          }
        }else{
          if(type && type==1){
            console.log("调取审批通过接口");
            this.$Message.destroy();
            this.$Message.success({
              content: '通过成功！',closable:true
            });
          }else if(type && type==2){
            console.log("调取审批拒绝接口");
            this.$Message.destroy();
            this.$Message.success({
              content: '拒绝成功！',closable:true
            });
          }
        }
      },
      cancel () {
        this.refuse=false;
        this.pass=false;
        this.allSubmit=false;
        this.getSubmit=false;
        this.index=-1;
      }
    },
    directives: {
      tab:{
        inserted: function (el) {
          // 滚动条至最左边
          el.scrollLeft=el.offsetWidth;
        }
      }
    }
  }
</script>


