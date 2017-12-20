<style>
.error{
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 0;
}
  .error_top{
    text-align: center;
    background: #fff;
  }
  .error_top .ivu-card-head{
    background: #fff;
  }
  .error_img{
    text-align: center;
  }
</style>
<template>
  <div class="error">
      <div class="error_top">
        <Card :bordered="false">
          <p slot="title">404错误！抱歉您要找的页面不存在</p>
          <div class="">
            <router-link to="/"><Button type="info">返回首页</Button></router-link>
            <Button type="error" @click="show">保证不打死管理员</Button>
          </div>
        </Card>
      </div>
      <div class="error_img">
        <div class="">
          <img src="./../../libs/images/ds-1.gif">
          <div class="alert"> 卧槽！页面不见了！ </div>
        </div>
      </div>
      <Modal v-model="modal" :closable="false">
        <div style="text-align:center">
          <img style="max-width: 100%" src="./../../libs/images/ds-2.png">
        </div>
        <div slot="footer">
          <Button type="error" size="large" long @click="close" style="font-size: 14px">我错了，向大佬低头</Button>
        </div>
      </Modal>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      data () {
        return {
          modal:false
        }
      },
      methods:{
        show () {
            this.modal=true
        },
        close () {
            this.modal=false
        }
      }
  }
</script>
