<template>
  <div>
    <a-modal
 :visible="visible"
 title="Delete"
 @cancel="handleCancel"
  @ok="handleCreate">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item >
       <h1>确认删除该规则？</h1>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        确认
      </a-button>
    </a-form-item>
  </a-form>

 </a-modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['visible2','item'],
  data() {
    return {
      visible:false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  watch:{
    visible2(n,o){
      let this_ = this
      this_.visible=n
    }
  },
  methods: {
    // 取消填写表单
    handleCancel(){
      // console.log("取消")
       this.visible=false
    },
  //  确认表单
    handleCreate(){
        // console.log("确认")
      this.visible=false
  },
    handleSubmit(e) {
      let this_1= this
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
         // console.log('Received values of form: ', typeof(values.delete));
         
        this_1.mypath=window.g.rules_delete
        axios({
          method: 'get',
              url: this_1.mypath,
               headers:{
          Authorization:localStorage.getItem('Authorization')
      },
              params:{
               behaviour:this_1.item.behaviour,
              }
            }).then(result=>{
                    if(result.data.code===200){
                this.$message.success("删除规则成功")
              }else if(result.data.code===401){
                  this.$message.error("Unauthorized")
              }
              else if(result.data.code===403){
                this.$message.error("Forbidden")
              }
                else if(result.data.code===404){
                this.$message.error("Not Found")
              }else if(result.data.message===44||result.data.message===40){
               this_1.$message.error("权限认证失效，请重新登录")
                this_1.$router.push('/Login');
          }
           } 
           )
        }
       });
    },
    handleSelectChange(value) {
     // console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>