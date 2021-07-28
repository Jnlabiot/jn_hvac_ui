<template>
 <a-modal
 :visible="visible"
 title="创建设备">
  <a-form  :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="hardWareID">
      <a-input
        v-decorator="['hardWareID', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
      <a-form-item label="name">
      <a-input
        v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
 
    <a-form-item label="status">
     <a-select
        v-decorator="[
          'status',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
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
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="string">
          string
        </a-select-option>
      
      </a-select>
        </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>

 </a-modal>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      visible:true,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      let this_1= this
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
           let a = eval(values.status.toLowerCase())
          console.log(typeof(a))
          console.log('Received values of form: ', values);
         
          axios({
             url: 'http://106.14.145.57:8080/api/v2/addNewTool',
             method:'post',
                 //发送格式为json
              data:{
                  "name": values.name,
                   "hardWareID":parseInt(values.hardWareID),
                  "status": a,
                  "type": values.type
              }
          }).then(response=>{
           this_1.visible=false
            console.log(response.data.msg)
          })
        }
       });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>