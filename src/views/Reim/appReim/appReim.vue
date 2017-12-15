<template>
	<div>
        <p class="text-al-center">费用报销单</p>
        <br>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <FormItem label="摘要" prop="brief">
	            <Input v-model="formValidate.brief"></Input>
	        </FormItem>
	        <FormItem label="金额" prop="money">
	            <Input v-model="formValidate.money"></Input>
	        </FormItem>
	        <FormItem label="科目" prop="items">
	            <Input v-model="formValidate.items"></Input>
	        </FormItem>
	        <FormItem label="单据张数" prop="num">
	            <Input v-model="formValidate.num"></Input>
	        </FormItem>
	        <FormItem label="备注" prop="desc">
	           <Input type="textarea" :autosize="{minRows: 3,maxRows: 5}"></Input>
	        </FormItem>
	        <FormItem label="凭证上传" prop="vias">
				<div class="demo-upload-list" v-for="item in uploadList">
				        <template v-if="item.status === 'finished'">
				            <img :src="item.url">
				            <div class="demo-upload-list-cover">
				                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
				                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
				            </div>
				        </template>
				        <template v-else>
				            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
				        </template>
				    </div>
				    <Upload
				        ref="upload"
				        :show-upload-list="false"
				        :default-file-list="defaultList"
				        :on-success="handleSuccess"
				        :format="['jpg','jpeg','png']"
				        :max-size="2048"
				        :on-format-error="handleFormatError"
				        :on-exceeded-size="handleMaxSize"
				        :before-upload="handleBeforeUpload"
				        multiple
				        type="drag"
				        action="//jsonplaceholder.typicode.com/posts/"
				        style="display: inline-block;width:58px;">
				        <div style="width: 58px;height:58px;line-height: 58px;">
				            <Icon type="camera" size="20"></Icon>
				        </div>
				    </Upload>
				    <Modal title="View Image" v-model="visible">
				        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
				    </Modal>
	        </FormItem>
	        <FormItem>
	            <Button type="primary" @click="handleSubmit('formValidate')"">提交申请</Button>
	            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
	        </FormItem>
        </Form>
	</div>
</template>

<script>
export default{
	data(){
		return {
			// 表单数据的初始化
            formValidate: {
                brief: '',
                money: '',
                items: '',
                num: '',
                desc: '',
                vias: ''
            },
            // 对表单进行验证
			ruleValidate: {
                brief: [
                    { required: true, message: '请填写摘要', trigger: 'blur' }
                ],
               	money: [
                    { required: true, message: '请填写金额', trigger: 'blur' }
                ],
                items: [
                    { required: true, message: '请填写科目', trigger: 'change' }
                ],
                num: [
                    { required: true, message: '请填写单据张数', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写备注...', trigger: 'blur' }
                ],
                vias: [
                    { required: true, message: '请填写备注...', trigger: 'blur' }
                ]
			},
			// 
			defaultList:[],
            imgName: '',
            visible: false,
            uploadList: []
		}
	},
    mounted () {
        this.uploadList = this.$refs.upload.fileList;
    },
	methods: {
		// 提交时候的验证信息
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('添加成功！');
                } else {
                    this.$Message.error('添加失败！');
                }
            })
        },
        // 取消提交时候执行的方法
        handleReset (name) {
            this.$refs[name].resetFields();
        },
 		handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: '上传图片格式不正确',
                desc: '文件' + file.name + ' 的格式不正确，请选择jpg或png格式文件'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: '图片超过限制大小',
                desc: '文件' + file.name + '太大，不能超过2M'
            });
        },
        handleBeforeUpload () {
            const check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: '最多可以上传五张图片'
                });
            }
            return check;
        }
    }
}
</script>

<style>
.demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
}
.demo-upload-list img{
    width: 100%;
    height: 100%;
}
.demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
    display: block;
}
.demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>