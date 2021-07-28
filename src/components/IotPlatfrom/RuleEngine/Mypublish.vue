<template>
  <div>
    <a-modal
 :visible="visible"
 title="Publish"
 @cancel="handleCancel"
  @ok="handleCreate">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item>
     <h1>确认执行该规则？</h1>
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
  props:['myvisible','item'],
  data() {
    return {
      mypath:"",
      visible:false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  watch:{
    myvisible(n,o){
      this.visible=n
    }
  },
  methods: {
    // 取消填写表单
    handleCancel(){
       this.visible=false
    },
  //  确认表单
    handleCreate(){
      this.visible=false
  },
    handleSubmit(e) {
      let this_1= this
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
        //  console.log('Received values of form: ', values);
          this_1.mypath=window.g.rules_publish
          console.log("测试publish",this_1.item.behaviour)
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
              console.log(result)
                    if(result.data.code===200){
                this.$message.success("发布规则成功")
              }else if(result.data.code===401){
                  this.$message.error("Unauthorized")
              }
              else if(result.data.code===403){
                this.$message.error("Forbidden")
              }
                else if(result.data.code===404){
                this.$message.error("Not Found")
              } else if(result.message==44||result.message==40){
                      this.$message.error("身份过期,请重新登录")
                        this_1.$router.push('/Login');
              }
           })
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