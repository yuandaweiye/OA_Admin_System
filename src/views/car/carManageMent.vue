<template>
    <div class="vehicleMange">
      <Tabs value="Insurance">
        <TabPane label="车辆保险" name="Insurance">
          <div style="width: 100%;overflow: auto">
            <Table border ref="Insurance" :columns="configVehicle" :data="safeList" no-data-text="暂无保险数据" style="min-width: 600px"></Table>
          </div>
          <div class="button">
            <Button type="primary" @click="showSafeModal">录入保险</Button>
          </div>
        </TabPane>
        <TabPane label="油卡信息" name="oilCard">
          <div style="width: 100%;overflow: auto">
            <Table border ref="oilCard" :columns="configOil" :data="oilList" no-data-text="暂无油卡数据" style="min-width: 340px"></Table>
          </div>
          <div class="button">
            <Button type="primary" @click="showOilInputModal">油卡录入</Button>
            <Button type="success" @click="showOilRechargeModal">油卡充值</Button>
            <Button type="warning" @click="showOilAddModal">加油申请</Button>
          </div>
        </TabPane>
      </Tabs>
      <!--保险录入模态框-->
      <Modal v-model="safeModal" :mask-closable="false">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="compose"></Icon>
          <span>保险填入</span>
        </p>
        <div style="text-align:center" class="carModel">
          <Form ref="inputSafe" :model="inputSave" :rules="validateSafe" :label-width="80" style="text-align: left">
            <FormItem label="车辆名称" prop="car">
              <Input v-model="inputSave.car" placeholder="请输入车辆名称"/>
            </FormItem>
            <FormItem label="车牌号" prop="carNumber">
              <Input v-model="inputSave.carNumber" placeholder="请输入车牌号"/>
            </FormItem>
            <FormItem label="保险金额" prop="money">
              <Input v-model="inputSave.money" placeholder="请输入金额"/>
            </FormItem>
            <FormItem label="上传凭证">
              <Upload
              ref="upload"
              :show-upload-list="true"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :multiple="false"
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              :on-format-error="upImgGesError"
              :on-exceeded-size="upImgSizeError"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="camera" size="20"></Icon>
              </div>
            </Upload>
            <p class="red">{{upImgTip}}</p>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" class="text">
          <Button type="primary" @click='safeCheck("inputSafe")'>提交</Button>
        </div>
      </Modal>
      <!--油卡录入模态框-->
      <Modal v-model="oilInputModal" :mask-closable="false">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="compose"></Icon>
          <span>油卡录入</span>
        </p>
        <div style="text-align:center">
          <Form ref="inputOil" :label-width="80" :model="inputOil" :rules="validateOilInput">
            <FormItem label="油卡卡号" prop="cardNumber">
              <Input v-model="inputOil.cardNumber" placeholder="请输入油卡卡号"/>
            </FormItem>
            <FormItem label="现有金额" prop="cardMoney">
              <Input v-model="inputOil.cardMoney" placeholder="请输入现有金额"/>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" class="text">
          <Button type="primary" @click="oilInputCheck('inputOil')">提交</Button>
        </div>
      </Modal>
      <!--油卡充值模态框-->
      <Modal v-model="oilRechargeModal" :mask-closable="false">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="compose"></Icon>
          <span>油卡充值</span>
        </p>
        <div style="text-align:center">
          <Form ref="rechargeOil" :label-width="80" :model="rechargeOil" :rules="vaildateOilRecharge">
            <FormItem label="油卡卡号" prop="cardSelect">
              <Select v-model="rechargeOil.cardSelect" not-found-text="油卡信息暂无" placeholder="请选择卡号">
                <Option v-for="item in rechargeOil.cardNumber" :value="item.id" :key="item.id" style="display: block">{{ item.number }}</Option>
              </Select>
            </FormItem>
            <FormItem label="充值金额" prop="rechargeMoney">
              <Input v-model="rechargeOil.rechargeMoney" placeholder="请输入充值金额"/>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" class="text">
          <Button type="primary" @click="oilRechargeCheck('rechargeOil')">提交</Button>
        </div>
      </Modal>
      <!--加油申请模态框-->
      <Modal v-model="oilAddModal" :mask-closable="false">
        <p slot="header" style="color:#f60;text-align:center">
          <Icon type="compose"></Icon>
          <span>加油申请</span>
        </p>
        <div style="text-align:center">
          <Form ref="addOil" :label-width="80" :model="addOil" :rules="vaildateOilAdd">
            <FormItem label="油卡卡号" prop="numberSelect">
              <Select v-model="addOil.numberSelect" not-found-text="油卡信息暂无" placeholder="请选择加油卡号">
                <Option v-for="item in addOil.cardNumber" :value="item.id" :key="item.id" style="display: block">{{ item.number }}</Option>
              </Select>
            </FormItem>
            <FormItem label="加油标号" prop="gradeSelect">
              <Select v-model="addOil.gradeSelect" not-found-text="标号信息暂无" placeholder="请选择油卡标号">
                <Option v-for="item in addOil.cardGrade" :value="item" :key="item" style="display: block">{{ item }}</Option>
              </Select>
            </FormItem>
            <FormItem label="加油金额" prop="addMoney">
              <Input v-model="addOil.addMoney" placeholder="请输入加油金额"/>
            </FormItem>
          </Form>
        </div>
        <div slot="footer" class="text">
          <Button type="primary" @click="oilAddCheck('addOil')">提交</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: "vehicle-manage-ment",
        data () {
          //保险金额验证方法
          const validateMoney = (rule, value, callback) => {
            var moneyName='';
            switch (rule.field){
              case 'money':
                  moneyName='保险金额';
                  break;
              case 'cardMoney':
                  moneyName='现有金额';
                  break;
              case 'rechargeMoney':
                  moneyName='充值金额';
                  break;
              case 'addMoney':
                  moneyName='加油金额';
                  break;
            }
            if (!value) {
              return callback(new Error(moneyName+'不能为空'));
            }
            if (isNaN(value)) {
              callback(new Error('请输入数字'));
            } else {
              if (value <=0) {
                callback(new Error('请输入大于0的'+moneyName));
              } else {
                callback();
              }
            }
          };
          return {
            safeModal: false,
            oilInputModal:false,
            oilRechargeModal:false,
            oilAddModal:false,
            upImgTip: '',          //图片上传提示
            safeList: [
              //保险列表信息
              {
                id: 1,
                pic: '',
                car: '商务别克',
                carNumber: '沪K02327',
                money: '6100',
                time: '2017-11-03'
              }
            ],
            oilList: [
              //油卡列表信息
              {
                id: 1,
                carNumber: '1000113100010372041',
                money: '2330',
                time: '2017-11-03'
              },
              {
                id: 2,
                carNumber: '1000113100010372041',
                money: '2330',
                time: '2017-11-07'
              },
              {
                id: 3,
                carNumber: '1000113100010372041',
                money: '2330',
                time: '2017-11-11'
              }
            ],
            configVehicle: [
              //保险列表信息配置
              {
                title: '编号',
                key: 'id',
                width:'10%',
                align: 'center'
              },
              {
                title: '凭证图片',
                key: 'pic',
                align: 'center'
              },
              {
                title: '保险车辆',
                key: 'car',
                align: 'center'
              },
              {
                title: '车牌号',
                key: 'carNumber',
                width:'20%',
                align: 'center'
              },
              {
                title: '保险金额',
                key: 'money',
                width:'16%',
                align: 'center',
                render: (h, params) => {
                  if (params.row.money && params.row.money != '') {
                    return h('div', [
                      h('strong', params.row.money + '/元')
                    ]);
                  } else {
                    return h('div', [
                      h('strong', params.row.money)
                    ]);
                  }
                }
              },
              {
                title: '上传时间',
                key: 'time',
                width:'16%',
                align: 'center'
              }
            ],
            configOil: [
              //油卡列表信息配置
              {
                title: '编号',
                key: 'id',
                width:'10%',
                align: 'center'
              },
              {
                title: '油卡卡号',
                key: 'carNumber',
                align: 'center'
              },
              {
                title: '现有金额',
                key: 'money',
                width:'20%',
                align: 'center',
                render: (h, params) => {
                  if (params.row.money && params.row.money != '') {
                    return h('div', [
                      h('strong', params.row.money + '/元')
                    ]);
                  } else {
                    return h('div', [
                      h('strong', params.row.money)
                    ]);
                  }
                }
              },
              {
                title: '录入时间',
                key: 'time',
                width:'20%',
                align: 'center'
              }
            ],
            inputSave: {
              //保险录入数据
              car: '',
              carNumber: '',
              money: '',
              pic: ''
            },
            inputOil: {
              //油卡录入数据
              cardNumber: '',
              cardMoney:''
            },
            rechargeOil:{
              //充值油卡数据
              cardNumber:[
                {id:'1',number:'10001131000103720412'},
                {id:'2',number:'10001131020103720840'}
              ],
              cardSelect:'',
              rechargeMoney:''
            },
            addOil:{
              //申请加油数据
              cardNumber:[
                {id:'1',number:'10001131000103720412'},
                {id:'2',number:'10001131020103720840'}
              ],
              cardGrade:["90号","93号","95号","97号"],
              numberSelect:'',
              gradeSelect:'',
              addMoney:''
            },
            validateSafe:{
              //保险录入验证
              car:[{required:true,message:'车辆名称不能为空',trigger:'blur'}],
              carNumber:[
                {required:true,message:'车牌号不能为空',trigger:'blur'}
                ],
              money:[
                {required:true,validator:validateMoney,trigger:'blur'}
                ]
            },
            validateOilInput:{
              //油卡输入验证
              cardNumber:[
                {required:true,message:'油卡卡号不能为空',trigger:'blur'}
              ],
              cardMoney:[
                {required:true,validator:validateMoney,trigger:'blur'}
              ]
            },
            vaildateOilRecharge:{
              //油卡充值验证
              cardSelect:[
                {required:true,message:'油卡卡号不能为空',trigger:'blur'}
              ],
              rechargeMoney:[
                {required:true,validator:validateMoney,trigger:'blur'}
              ]
            },
            vaildateOilAdd:{
              //油卡充值验证
              numberSelect:[
                {required:true,message:'油卡卡号不能为空',trigger:'blur'}
              ],
              gradeSelect:[
                {required:true,message:'汽油标号不能为空',trigger:'blur'}
              ],
              addMoney:[
                {required:true,validator:validateMoney,trigger:'blur'}
              ]
            }
          }
        },
        methods :{
          showSafeModal () {
            //显示录入保险模态框
            this.safeModal=true;
          },
          showOilInputModal () {
            //显示油卡录入模态框
             this.oilInputModal=true;
          },
          showOilRechargeModal () {
            //显示油卡充值模态框
              this.oilRechargeModal=true;
          },
          showOilAddModal () {
            //显示加油申请模态框
            this.oilAddModal=true;
          },

          safeCheck (name) {
            //保险录入验证
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('Success!');
              } else {
                this.$Message.error('Fail!');
              }
            })
          },
          oilInputCheck (name) {
            //油卡录入验证
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('Success!');
              } else {
                this.$Message.error('Fail!');
              }
            })
          },
          oilRechargeCheck (name) {
          //  油卡充值验证
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('Success!');
              } else {
                this.$Message.error('Fail!');
              }
            })
          },
          oilAddCheck (name) {
            //  加油申请验证
            this.$refs[name].validate((valid) => {
              if (valid) {
                this.$Message.success('Success!');
              } else {
                this.$Message.error('Fail!');
              }
            })
          },
          upImgGesError (error, file, fileList) {
            //图片格式验证失败
            this.upImgTip='上传失败，格式错误';
          },
          upImgSizeError (file, fileList) {
            //图片超出指定大小限制
            this.upImgTip='上传失败，图片大小超过2M';
          }
        }
    }
</script>

<style scoped>
  .vehicleMange .button {
    margin-top: 20px;
  }
  .vehicleMange .button button{
    margin-right: 10px;
  }
  .carModel .ivu-form-item-content{
    text-align: left;
  }
</style>
