<template>
 <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
       <a-form-item label="流媒体服务器名称">
      <a-input
        placeholder="请输入流媒体服务器名称" v-decorator="['behaviour', { rules: [{ required: true, message: '请输入流媒体服务器名称!' }] }]"
      />
    </a-form-item>
     
    
       <a-form-item label="服务商">
     <a-select
        v-decorator="[
          'status',
          { rules: [{ required: true, message: '请输入服务商' }] },
        ]"
        placeholder="在下面选一个选项"
       
      >
        <a-select-option value="SRS">
          SRS(srs-media)
        </a-select-option>
        <a-select-option value="Other">
          其他
        </a-select-option>
      </a-select>
        </a-form-item>

     <a-form-item label="公网ip">
      <a-input
        placeholder="请输入ip地址"  v-decorator="['msg', { rules: [{ required: true, message: '请输入ip地址' }] }]"
      />
    </a-form-item>

     <a-form-item label="http-flv端口">
      <a-input
        placeholder="请输入端口号"  v-decorator="['topics', { rules: [{ required: true, message: '请输入端口号' }] }]"
      />
    </a-form-item>
      <a-form-item label="webrtc端口">
      <a-input
        placeholder="请输入端口号"  v-decorator="['topics', { rules: [{ required: true, message: '请输入端口号' }] }]"
      />
    </a-form-item>
         <a-form-item label="rtmp端口">
      <a-input
        placeholder="请输入端口号"  v-decorator="['topics', { rules: [{ required: true, message: '请输入端口号' }] }]"
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
  
    name:'ServerSrs',
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