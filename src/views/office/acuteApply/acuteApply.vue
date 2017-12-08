<style>
.add_button{
  margin-top:20px;
}
</style>
<template>
  <div>
    <Row>
      <Col :md="{span:'22',push:'1'}" :sm="{span:'24',push:'0'}" :xs="{span:'24',push:'0'}">
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
        <Form :model="addList" :rules="ruleValidate" :label-width="50">
          <FormItem label="品名" prop="name">
            <Input v-model="addList.name" placeholder="请输入品名"/>
          </FormItem>
        </Form>
        <p>Will you delete it?</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long  @click="">Delete</Button>
      </div>
    </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        model:false,
        lists:[],
        config:[
          {
            title:'品名',
            key:'name',
            align:'center'
          },
          {
            title:'规格',
            key:'size',
            align:'center'
          },
          {
            title:'单位',
            key:'company',
            align:'center'
          },
          {
            title:'数量',
            key:'number',
            align:'center'
          },
          {
            title:'预估单价',
            key:'unit',
            align:'center'
          },
          {
            title:'备注',
            key:'name',
            align:'remake'
          }
        ],
        addList:{
          name:'',

        },
        ruleValidate:{
          name: [
            { required: false, message: '物品名称不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    created () {

    },
    methods: {
      addApply () {
        this.model=true
      }
    }
  }
</script>
