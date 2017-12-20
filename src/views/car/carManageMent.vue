<template>
    <div class="vehicleMange">
      <Tabs value="Insurance">
        <TabPane label="车辆保险" name="Insurance">
          <Table border ref="Insurance" :columns="config" :data="safeList" no-data-text="暂无保险数据"></Table>
          <div class="button">
            <Button type="primary" @click="showSafeModal">录入保险</Button>
          </div>
        </TabPane>
        <TabPane label="油卡信息" name="oilCard">标签三的内容</TabPane>
      </Tabs>
      <!--保险录入模态框-->
      <Modal v-model="safeModal">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="compose"></Icon>
          <span>保险填入</span>
        </p>
        <div style="text-align:center">
          <Form :model="inputSave" :label-width="80">
            <FormItem label="车辆名称">
              <Input v-model="inputSave.car" placeholder="请输入车辆名称"/>
            </FormItem>
            <FormItem label="车牌号">
              <Input v-model="inputSave.carNumber" placeholder="请输入车牌号"/>
            </FormItem>
            <FormItem label="保险金额">
              <Input v-model="inputSave.money" placeholder="请输入金额"/>
            </FormItem>
            <FormItem label="上传凭证">
              <!--<Input v-model="inputSave.money" placeholder="请输入金额"/> -->
              <Upload
              ref="upload"
              :show-upload-list="false"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
              </div>
            </Upload>

            </FormItem>

          </Form>
        </div>
        <div slot="footer" class="text">
          <Button type="primary">提交</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: "vehicle-manage-ment",
        data () {
          return {
            safeModal:false,
            safeList:[
              {
                id:1,
                pic:'',
                car:'商务别克',
                carNumber:'沪K02327',
                money:'6100',
                time:'2017-11-03'
              }
            ],
            config:[
              {
                title:'编号',
                key:'id',
                align:'center'
              },
              {
                title:'凭证图片',
                key:'pic',
                align:'center'
              },
              {
                title:'保险车辆',
                key:'car',
                align:'center'
              },
              {
                title:'车牌号',
                key:'carNumber',
                align:'center'
              },
              {
                title:'保险金额',
                key:'money',
                align:'center'
              },
              {
                title:'上传时间',
                key:'time',
                align:'center'
              }
            ],
            inputSave:{
                car:'',
                carNumber:'',
                money:'',
                pic:''
            }
          }
        },
        methods :{
          showSafeModal () {
            this.safeModal=true;
          }
        }
    }
</script>

<style scoped>
  .vehicleMange .button {
    margin-top: 20px;
  }
</style>
