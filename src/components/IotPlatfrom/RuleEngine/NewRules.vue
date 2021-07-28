<template>
    <div>
      <a-button type="primary" @click="showModal">
      新建规则
    </a-button>
     <a-divider />
     <a-modal
      :visible="visible"
      title='新建规则'
      okText='确认'
      @cancel="cancel"
      @ok="create"
    >
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
       <a-form-item label="behaviour">
      <a-input
        placeholder="请输入你要定义的行为" v-decorator="['behaviour', { rules: [{ required: true, message: 'Please input your behaviour!' }] }]"
      />
    </a-form-item>
     
    
       <a-form-item label="hardwareid">
      <a-input
         placeholder="请输入硬件id" v-decorator="['hardwareid', { rules: [{ required: true, message: 'Please input your hardwareid!' }] }]"
      />
    </a-form-item>

     <a-form-item label="msg">
      <a-input
        placeholder="请输入消息"  v-decorator="['msg', { rules: [{ required: true, message: 'Please input your msg' }] }]"
      />
    </a-form-item>

     <a-form-item label="topics">
      <a-input
        placeholder="请输入订阅的主题"  v-decorator="['topics', { rules: [{ required: true, message: 'Please input your topics' }] }]"
      />
    </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
      </a-form>
    </a-modal>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  
    name:'NewRules',
    data(){
        return{
          mypath:"",
            visible: false,
             form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
    methods:{
        showModal() {
        this.visible=true
    },
      create(){
  
       this.visible=false
    },
    cancel(){
      this.visible=false
    },
    handleSubmit(e){
        let this_1 = this
        e.preventDefault();
        this.form.validateFields((err, values) => {
        if (!err) {
        //  console.log('Received values of form: ', values);
          this_1.mypath=window.g.new_rules
            axios({
             url: this_1.mypath,
             method:'post',
                 //发送格式为json
                   headers:{
          Authorization:localStorage.getItem('Authorization')
      },   
              data:{
                "behaviour":values.behaviour,
                "hardwareid": parseInt(values.hardwareid),
                "msg":values.msg,
                "topics": values.topics
            }
          }).then(response=>{
           this_1.visible=false
           // console.log(response.data.code)
            if(response.data.code==200){
               this_1.$message.success('创建成功');
            } else if(response.data.code==201){
                 this_1.$message.warning("code=201 Created")
            }else if(response.data.code==401){
                  this_1.$message.warning("code=401 Unauthorized")
            }
            else if(response.data.code==403){
                 this_1.$message.warning("Code=403 Forbidden")
            }  else if(response.data.code==404){
                 this_1.$message.warning("code=404 NotFount")
            }else if(result.data.message===44||result.data.message===40){
               this_1.$message.error("权限认证失效，请重新登录")
                this_1.$router.push('/Login');
          }
          })
        }

      });
    }
    }
}
</script>