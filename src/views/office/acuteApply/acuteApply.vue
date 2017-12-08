<style>
.add_button{
  margin-top:20px;
}
  .acute .ivu-table-cell{
    padding: 0;
  }
</style>
<template>
  <div class="acute">
    <Row>
      <!-- :md="{span:'22',push:'1'}" :sm="{span:'24',push:'0'}" :xs="{span:'24',push:'0'}"-->
      <Col>
        <Card :bordered="true">
          <p slot="title" class="text-al-center">急性物资申请单</p>
          <Table :border="true" :data="lists" :columns="config" no-data-text="暂未填写申请单"></Table>
        </Card>
        <Button class="add_button" type="primary" @click="addApply">填写申请单</Button>
      </Col>
    </Row>
    <Modal v-model="model">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>急性物资申请单</span>
      </p>
      <div style="text-align:center">
        <Form ref="addList" :model="addList" :rules="ruleValidate" :label-width="50">
          <FormItem label="品名" prop="name">
            <Input v-model="addList.name" placeholder="请输入品名"/>
          </FormItem>
          <FormItem label="规格" prop="size">
            <Input v-model="addList.size" placeholder="请输入规格名"/>
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
            <Button type="primary" @click="submit('addList')">确认</Button>
            <Button type="ghost" style="margin-left: 8px" @click="reset('addList')">重置</Button>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">

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
      }
      return {
        model:false,
        lists:[],
        config:[
          {
            title:'品名',
            key:'name',
            width:'20%',
            align:'center'
          },
          {
            title:'规格',
            key:'size',
            width:'10%',
            align:'center'
          },
          {
            title:'单位',
            key:'company',
            width:'10%',
            align:'center'
          },
          {
            title:'数量',
            key:'number',
            width:'10%',
            align:'center'
          },
          {
            title:'预估单价',
            key:'unit',
            width:'10%',
            align:'center'
          },
          {
            title:'备注',
            key:'remake',
            width:'20%',
            align:'center'
          },
          {
            title:'操作',
            key: 'action',
            align: 'center',
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
                      this.show(params.index)
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        addList:{
          name:'',
          size:'',
          company:'',
          unit:0,
          number:0,
          price:'',
          remake:''
        },
        ruleValidate:{
          name: [
            { required: true, message: '物品名称不能为空', trigger: 'blur' }
          ],
          size: [
            { required: true, message: '物品规格不能为空', trigger: 'blur' }
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
      addApply () {
        this.model=true
      },
      submit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            var list=new Object()
            for(var vau in this.addList){
              list[vau]=this.addList[vau];
            }
            this.lists.push(list);
            this.model=false
          }
        })
      },
      reset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
