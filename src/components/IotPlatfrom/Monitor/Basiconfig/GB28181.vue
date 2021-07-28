<template>
 <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="信令名称">
      <a-input
        placeholder="和流媒体服务器名称一致" v-decorator="['behaviour', { rules: [{ required: true, message: '请输入信令名称' }] }]"
      />
    </a-form-item>
       <a-form-item label="SIP服务器ID">
      <a-input
        placeholder="在摄像头中配置中查看" v-decorator="['behaviour', { rules: [{ required: true, message: '请输入SIP服务器ID' }] }]"
      />
    </a-form-item>
     
    
       <a-form-item label="SIP服务器域">
      <a-input
         placeholder="在摄像头中配置中查看" v-decorator="['hardwareid', { rules: [{ required: true, message: '请输入SIP服务器域!' }] }]"
      />
    </a-form-item>

     <a-form-item label="SIP服务器地址">
      <a-input
        placeholder="输入SRS地址"  v-decorator="['msg', { rules: [{ required: true, message: '请输入SIP服务器地址' }] }]"
      />
    </a-form-item>

     <a-form-item label="SIP服务器端口">
      <a-input
        placeholder="在摄像头中配置中查看"  v-decorator="['topics', { rules: [{ required: true, message: '请输入SIP服务器端口' }] }]"
      />
    </a-form-item>
       <a-form-item label="视频通道编码ID">
      <a-input
        placeholder="这个就是播放的流名称"  v-decorator="['topics', { rules: [{ required: true, message: '请输入视频通道编码ID' }] }]"
      />
    </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        保存
      </a-button>
    </a-form-item>
      </a-form>
  
    </div>
</template>
<script>
import axios from 'axios'
export default {
  
    name:'GB28181',
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
    //       this_1.mypath=window.g.new_rules
    //         axios({
    //          url: this_1.mypath,
    //          method:'post',
    //              //发送格式为json
    //                headers:{
    //       Authorization:localStorage.getItem('Authorization')
    //   },   
    //           data:{
    //             "behaviour":values.behaviour,
    //             "hardwareid": parseInt(values.hardwareid),
    //             "msg":values.msg,
    //             "topics": values.topics
    //         }
    //       }).then(response=>{
    //        this_1.visible=false
    //        // console.log(response.data.code)
    //         if(response.data.code==200){
    //            this_1.$message.success('创建成功');
    //         } else if(response.data.code==201){
    //              this_1.$message.warning("code=201 Created")
    //         }else if(response.data.code==401){
    //               this_1.$message.warning("code=401 Unauthorized")
    //         }
    //         else if(response.data.code==403){
    //              this_1.$message.warning("Code=403 Forbidden")
    //         }  else if(response.data.code==404){
    //              this_1.$message.warning("code=404 NotFount")
    //         }else if(result.data.message===44||result.data.message===40){
    //            this_1.$message.error("权限认证失效，请重新登录")
    //             this_1.$router.push('/Login');
    //       }
    //       })
        }

      });
    }
    }
}
</script>