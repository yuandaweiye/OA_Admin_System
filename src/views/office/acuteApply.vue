<style>
.add_button{
  margin-top:20px;
}
.submit_button{
  margin-top: 20px;
  margin-left: 20px;
}
.ivu-card-head{
  background: #38ADFF;
  color: #fff;
}
  .acute .ivu-table-cell{
    padding: 0;
  }


  /*表格样式*/
  .table{
    width: 100%;
    min-width: 620px;
    border: 1px solid #DDDEE1;
  }
  .table thead{
    background: #F8F8F9;
  }

  .table thead tr th{
     text-overflow: ellipsis;
     vertical-align: middle;
     white-space: nowrap;
     overflow: hidden;
     text-align: center;
   }
  .table tr th,.table tr td{
    text-align: center;
    border-right: 1px solid #e9eaec;
    border-bottom: 1px solid #e9eaec;
    height: 40px;
    padding:5px 0;
    vertical-align: middle;
    font-size: 12px;
    box-sizing: border-box;
  }
  .width-5{
    width: 5%;
  }
  .width-10{
    width: 10%;
  }
  .width-15{
    width: 15%;
  }
  .width-20{
    width: 20%;
  }
  .width-33{
    width: 33%;
  }
  .width-30{
    width: 30%;
  }
  .width-100{
    width: 100%;
  }
  .border-r-1{
    border-right: 1px solid #e9eaec;
  }
  .border-r-01{
    border-right: 0;
  }
</style>
<template>
  <div class="acute">
    <Row>
      <Col>
        <Card :bordered="true">
          <p slot="title" class="text-al-center" style="color:#fff">急性物资申请单</p>
          <div style="overflow-x: auto">
              <table  class="table" cellspacing="0" cellpadding="0" align="center">
                <thead>
                  <tr>
                    <th class="width-5">
                       <Checkbox label="" @on-change="selectAll"></Checkbox>
                    </th>
                    <th class="width-20">
                      品名
                    </th>
                    <th class="width-10">
                      规格
                    </th>
                    <th class="width-10">
                      单位
                    </th>
                    <th class="width-10">
                      数量
                    </th>
                    <th class="width-10">
                      预估单价
                    </th>
                    <th class="width-20">
                      备注
                    </th>
                    <th class="width-15">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(value, key) in lists">
                    <td class="width-5"><Checkbox label="" v-model="checkAllGroup[key]"></Checkbox>
                    </td>
                    <td class="width-20">{{value.name}}</td>
                    <td class="width-10">{{value.size}}</td>
                    <td class="width-10">{{value.company}}</td>
                    <td class="width-10">{{value.number}}</td>
                    <td class="width-10">{{value.unit}}</td>
                    <td class="width-20">{{value.remake}}</td>
                    <td class="width-15">
                      <Button type="primary" size="small" style="margin-left: 5px" @click="alterApply(key)">修改</Button>
                      <Button type="error" size="small" @click="remove(key)">删除</Button>
                    </td>
                  </tr>
                  <tr v-if="lists.length==0">
                    <td class="width-100" colspan="8"><span>暂未填写申请单</span></td>
                  </tr>
                </tbody>
              </table>
           </div>
        </Card>
        <Button class="add_button" type="warning" @click="addApply">填写申请单</Button>
        <Button class="submit_button" type="primary" @click="showApply(true)">提交申请单</Button>
      </Col>
    </Row>
    <!--申请模态框-->
    <Modal v-model="modelApply">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="compose"></Icon>
        <span>急性物资申请单</span>
      </p>
      <div style="text-align:center">
        <Form ref="addList" :model="addList" :rules="ruleValidate" :label-width="50">
          <FormItem label="品名" prop="name">
            <Input v-model="addList.name" placeholder="请输入品名"/>
          </FormItem>
          <FormItem label="规格" prop="size">
            <Input v-model="addList.size" placeholder="请输入规格"/>
          </FormItem>
          <FormItem label="单位" prop="company">
            <Input v-model="addList.company" placeholder="请输入单位"/>
          </FormItem>
          <FormItem label="数量" prop="number">
            <InputNumber v-model="addList.number" placeholder="请输入数量" :min="0" :precision="0" style="width: 100%"/>
          </FormItem>
          <FormItem label="单价（元）" prop="unit">
            <InputNumber v-model="addList.unit" placeholder="请输入单价" :min="0" style="width: 100%"/>
          </FormItem>
          <FormItem label="备注" prop="remake">
            <Input  type="textarea" v-model="addList.remake" placeholder="请填写备注"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="add('addList')">确认</Button>
            <Button type="ghost" style="margin-left: 8px" @click="reset('addList')">重置</Button>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">

      </div>
    </Modal>
    <!--修改模态框-->
    <Modal v-model="modelAlter">
      <p slot="header" style="color:#f00;text-align:center">
        <Icon type="edit"></Icon>
        <span>急性物资修改</span>
      </p>
      <div style="text-align:center">
        <Form ref="alterList.value" :model="alterList.value" :rules="ruleValidate" :label-width="50">
          <FormItem label="品名" prop="name">
            <Input v-model="alterList.value.name" placeholder="请输入品名"/>
          </FormItem>
          <FormItem label="规格" prop="size">
            <Input v-model="alterList.value.size" placeholder="请输入规格名"/>
          </FormItem>
          <FormItem label="单位" prop="company">
            <Input v-model="alterList.value.company" placeholder="请输入单位"/>
          </FormItem>
          <FormItem label="数量" prop="number">
            <InputNumber v-model="alterList.value.number" placeholder="请输入数量" :min="0" :precision="0" style="width: 100%"/>
          </FormItem>
          <FormItem label="单价（元）" prop="unit">
            <InputNumber v-model="alterList.value.unit" placeholder="请输入单价" :min="0" style="width: 100%"/>
          </FormItem>
          <FormItem label="备注" prop="remake">
            <Input  type="textarea" v-model="alterList.value.remake" placeholder="请填写备注"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="alter('alterList.value')">确认</Button>
            <Button type="ghost" style="margin-left: 8px" @click="restore">还原</Button>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">

      </div>
    </Modal>
    <!--确认提交申请模态框-->
    <Modal v-model="modelSubmit" width="700" :closable="false">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-paper" style="font-size: 17px;"></Icon>
        <span style="color: #f00">是否提交以下申请信息？</span>
      </p>
      <div style="overflow-x: auto;text-align: center;" >
        <table  class="table" cellspacing="0" cellpadding="0" align="center">
          <thead>
          <tr>
            <th class="width-5">
              序号
            </th>
            <th class="width-20">
              品名
            </th>
            <th class="width-10">
              规格
            </th>
            <th class="width-10">
              单位
            </th>
            <th class="width-10">
              数量
            </th>
            <th class="width-10">
              预估单价
            </th>
            <th class="width-20">
              备注
            </th>
            <th class="width-15">
              状态
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(value, key) in submitList">
            <td class="width-5">{{key+1}}
            </td>
            <td class="width-20">{{value.name}}</td>
            <td class="width-10">{{value.size}}</td>
            <td class="width-10">{{value.company}}</td>
            <td class="width-10">{{value.number}}</td>
            <td class="width-10">{{value.unit}}</td>
            <td class="width-20">{{value.remake}}</td>
            <td class="width-15">
              <p class="color-warn" v-if="value.status==0"><Icon type="alert"></Icon>&nbsp;&nbsp;未提交</p>
              <p class="color-info" v-if="value.status==1"><Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>&nbsp;&nbsp;提交中</p>
              <p class="color-success" v-if="value.status==2"><Icon type="checkmark"></Icon>&nbsp;&nbsp;申请成功</p>
              <p class="color-error" v-if="value.status==3"><Icon type="close"></Icon>&nbsp;&nbsp;申请失败</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer" style="text-align: center">
        <Button type="primary" @click="submit" v-show="!getSubmit">提交</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button @click="cancelApply" v-show="!getSubmit">取消</Button>
        <Button type="error" @click="cancelApply" v-show="getSubmit">关闭</Button>
      </div>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      const validateAge = (rule, value, callback) => {
        if (!value || value=='0' || value==0) {
          return callback(new Error('物品单价或数量需大于0'));
        }else{
          callback();
        }
      };
      return {
        modelApply:false,         //添加申请信息开关
        modelAlter:false,         //修改申请信息开关
        modelSubmit:false,        //提交申请信息展示开关
        getSubmit:false,
        lists:[],                 //申请信息
        id:0,                     //添加信息索引
        checkAllGroup:[],
        ckeckAll:false,             //多选开关
        alterInit:{},             //修改界面初识数据
        alterList:{
          index:-1,
          value:{
            name:'',
            size:'',
            company:'',
            unit:0,
            number:0,
            remake:''
          }
        },
        addList:{
          name:'',
          size:'',
          company:'',
          unit:0,
          number:0,
          remake:''
        },
        submitList:[],            //最终选择提交数据
        ruleValidate:{
          name: [
            { required: true, message: '物品名称不能为空', trigger: 'blur' }
          ],
          size: [
          ],
          company: [
            { required: true, message: '物品单位不能为空', trigger: 'blur' }
          ],
          unit: [
            { required: true, validator: validateAge, trigger: 'blur' }
          ],
          number: [
            { required: true,  validator: validateAge, trigger: 'blur' }

          ],
          price: [
            { required: true, message: '物品预估单价不能为空', trigger: 'blur' }
          ],
          remake:[

          ]
        }
      }
    },
    created () {

    },
    methods: {
      addApply () {        //填写申请单
        this.modelApply=true
      },
      alterApply (index) {          //修改申请单
        this.modelAlter=true;
        this.alterList.index=index;
        for(var i in this.lists[index]){
          this.alterList.value[i]=this.lists[index][i]
          this.alterInit[i]=this.lists[index][i]
        }
      },
      add (name) {         //申请单添加确认
        this.$refs[name].validate((valid) => {
          if (valid) {
            var list=new Object()
            for(var vau in this.addList){
              list[vau]=this.addList[vau];
              this.id+=1;
              list['id']=this.id;
            }
            this.checkAllGroup.push(false);
            this.lists.push(list);
            this.modelApply=false;
            this.reset('addList');
          }
        })
      },
      alter (name){      //申请单修改确认
        this.$refs[name].validate((valid) => {
          if (valid) {
            var alterList=new Object()
            for(var vau in this.alterList.value){
              alterList[vau]=this.alterList.value[vau];
            }
            this.lists.splice(this.alterList.index,1,alterList);
            this.modelAlter=false;
          }
        })
      },
      restore () {       //还原修改的申请单
        for(var i in this.alterInit){
          this.alterList.value[i]=this.alterInit[i];
        }
      },
      reset (name) {            //重置添加的申请单
        this.$refs[name].resetFields();
      },
      remove (index) {         //删除申请单
        this.checkAllGroup.splice(index,1);
        this.lists.splice(index,1);
      },
      selectAll () {
        //全选
        if(this.lists.length>0){
          this.ckeckAll=!this.ckeckAll;
          var checks=[];
          if(this.ckeckAll){
            for (var i=0;i<this.checkAllGroup.length;i++){
              checks[i]=true;
            }
          }else{
            for (var i=0;i<this.checkAllGroup.length;i++){
              checks[i]=false;
            }
          }
          this.checkAllGroup=checks;
        }
      },
      showApply () {
        //提交申请单
        var check=false;
        this.submitList=[];
        for (var a=0;a<this.checkAllGroup.length;a++){
          if(this.checkAllGroup[a]){
            check=true;
            this.lists[a]["status"]=0;
            this.submitList.push(this.lists[a]);
          }
        }
        if(check){
          this.modelSubmit=true;
        }else{
          this.$Modal.warning({
            title: "",
            content: "<p class='red'>请勾选你要提交的数据</p>"
          });
        }
      },
      cancelApply () {
        this.modelSubmit=false;
        this.getSubmit=false;
      },
      submit () {
        //       最终提交申请单
        this.getSubmit=true;
        for(var j=0;j<this.submitList.length;j++){
            this.getApi(j);
        }
      },
      getApi (index) {
        var submitData={};
        var datas=this.submitList[index];
        submitData={
          uid:parseInt(this.$userInfo.id),
          wname:datas.name,
          xing:datas.size,
          com:datas.company,
          Num:datas.number,
          Unit:datas.unit,
          Content:datas.remake
        };
        datas.status=1;
        this.submitList.splice(index,1,datas);
        this.$api.get('/api.php/index/jadd',submitData,r=>{
          if(r && r.status==1){
            datas=this.submitList[index];
            datas.status=2;
            this.submitList.splice(index,1,datas);
            for(var i=0;i<this.lists.length;i++){
              if(this.lists[i].id==this.submitList[index].id){
                this.checkAllGroup.splice(i,1);
                this.lists.splice(i,1);
              }
            }
          }else{
            datas.status=3;
            this.submitList.splice(index,1,datas);
          }
        },e=>{
          datas.status=3;
          this.submitList.splice(index,1,datas);
        });
      }
    }
  }
</script>
