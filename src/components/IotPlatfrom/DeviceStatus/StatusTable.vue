<template>
<div>
   <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
  <a-table :pagination="pagination"  :columns="columns" :data-source="data">
    <a  slot-scope="text">{{ text }}</a>
    <span slot="customTitle">ID</span>
    <span slot="action" slot-scope="text, record">
      <!-- <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" /> -->
      <a @click="()=>edit(record)" class="ant-dropdown-link">禁止 </a>
       <a-divider type="vertical" />
      <a @click="()=>recover(record)" class="ant-dropdown-link">恢复 </a>
       <a-divider type="vertical" />
       <a @click="()=>deletedevices(record)" class="ant-dropdown-link">删除 </a>
    </span>
  </a-table>
   </a-spin>
</div>

</template>

<script>
const columns = [
   {
    title: 'ID',
    dataIndex: 'myid',
    key: 'myid',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '注册时间',
    dataIndex: 'mytime',
    key: 'mytime',
   
  },
    {
    title: '状态',
    dataIndex: 'mystate',
    key: 'mystate',
  },
     {
    title: '类型',
    dataIndex: 'mytype',
    key: 'mytype',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

// let data = [
//   {
//     key: '1',
//     id: 'John Brown',
//     name: "湿度传感器",
//     time: '2021-04-20',
//     state: '在线',
//   },

// ];
    // let listobject={
    //         key: "",
    //         id: "",
    //         name: "",
    //         time: 0,
    //         state: true,
    //       }

import  axios from 'axios'
export default {
 
  name:"StatusTable",
   props:['list'],
  data() {
    return {
      
      pagination:{
       pageSize:7
      },
      mypath:"",
      spinning:false,
      data:[],
      columns,
       mykey:1,
      
    };
  },

//   hardWareID: 888
// id: "033324a5-9d0e-4125-97a9-25cfcc9b353b"
// name: "空调"
// status: true
// time: 1619362148
// type: "product"
  watch:{
   
      list(n,o){
      //遍历数组
      this.spinning=false
      let this_1=this
      this.spinning=false
     this.data= n.map(item=>{
       return{
            key: item.id,
            myid: item.hardWareID,
            name: item.name,
            mytime: this_1.formatTime(item.time).toString(),
            mystate:item.status.toString(),
            mytype:item.type
            
       }
     })
   
      
    }
  },
  created(){
    this.spinning=true
  },
  methods:{
    edit(recode){
      let _this=this
      _this.mypath = window.g.recover_devices
     // console.log(recode)
        axios.get(_this.mypath,
      { 
        headers:{
          Authorization:localStorage.getItem('Authorization')
      },
        params:{
           hardwareid:recode.myid,
           status:false
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
          if(response.data.code===200){
             _this.$message.success("禁止成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          }
          else{
             _this.$message.error("禁止失败，三秒后更新列表")
          }
        
        
         })
    },
    recover(recode){
        let _this=this
        _this.mypath = window.g.recover_devices
         axios.get(_this.mypath,
      { headers:{
          Authorization:localStorage.getItem('Authorization')
      },
        params:{
           hardwareid:recode.myid,
           status:true
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
         if(response.data.code===200){
             _this.$message.success("恢复成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          }
          else{
             _this.$message.error("恢复失败，三秒后更新列表")
          }
         })
    },
    deletedevices(recode){
      let _this=this
        _this.mypath =window.g.delete_devices
          axios.get(_this.mypath,
      { headers:{
          Authorization:localStorage.getItem('Authorization')
      },
        params:{
           hardwareid:recode.myid,
           status:true
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
         if(response.data.code===200){
             _this.$message.success("删除设备成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          } else if(response.data.mssage===44||response.data.message===40){
               this_1.$message.error("权限认证失效，请重新登录")
                this_1.$router.push('/IotPlatfrom/Login');
          }
          else{
             _this.$message.error("删除设备失败，三秒后更新列表")
          }
         })
    },
       formatTime (time) {
        let unixtime = time
        let unixTimestamp = new Date(unixtime * 1000)
        let Y = unixTimestamp.getFullYear()
        let M = ((unixTimestamp.getMonth() + 1) > 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
        let D = (unixTimestamp.getDate() > 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
        let toDay = Y + '-' + M + '-' + D
        return toDay
      }
  }
};
</script>