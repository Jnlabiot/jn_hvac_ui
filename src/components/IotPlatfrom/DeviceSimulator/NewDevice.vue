<template>
  <div>
    <a-button type="primary" @click="showModal">
      新建设备
    </a-button>
    <a-modal
 :visible="visible"
 title="创建设备"
 @cancel="handleCancel"
  @create="handleCreate">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="hardWareID">
      <a-input
       placeholder="请输入硬件ID" v-decorator="['hardWareID', { rules: [{ required: true, message: 'Please input yourhardWareID!' }] }]"
      />
    </a-form-item>
      <a-form-item label="name">
      <a-input
       placeholder="请输入请输入设备名称"  v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"
      />
    </a-form-item>
 
    <a-form-item label="status">
     <a-select
        v-decorator="[
          'status',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="在下面选一个选项"
        @change="handleSelectChange"
      >
        <a-select-option value="true">
          true
        </a-select-option>
        <a-select-option value="false">
          false
        </a-select-option>
      </a-select>
        </a-form-item>

     <a-form-item label="type">
        <a-select
        v-decorator="[
          'type',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="在下面选一个选项"
        @change="handleSelectChange"
      >
        <a-select-option value="any">
          any
        </a-select-option>
         <a-select-option value="product">
          product
        </a-select-option>
      </a-select>
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
  data() {
    return {
      mypath:"",
      visible:false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    showModal(){
       this.visible=!this.visible
    },
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
           let a = eval(values.status.toLowerCase())
         // console.log(typeof(a))
         // console.log('Received values of form: ', values);
          this_1.mypath=window.g.new_devices
          axios({
             url: this_1.mypath,
             method:'post',
                 //发送格式为json
              headers:{
          Authorization:localStorage.getItem('Authorization')
      },   
              data:{
                  "name": values.name,
                   "hardWareID":parseInt(values.hardWareID),
                  "status": a,
                  "type": values.type
              }
          }).then(response=>{
           this_1.visible=false
          //  console.log(response.data.code)
            if(response.data.code==200){
               this_1.$message.success('创建成功');
            }else{
                this_1.$message.error('创建设备,请检查hardWareID是否为数字,或者ID，名称，与以前设备相同');
            }
          })
        }
       });
    },
    handleSelectChange(value) {
    //  console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>