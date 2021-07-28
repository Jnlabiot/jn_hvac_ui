<template>
<!-- 设备管理 -->
   <div class="DeviceStatus">
           <Breadcrumb :home="devicetitle"/>
          <StatusTotal :total="devises"/>
          <NewDevice/>
          <a-divider />
          <StatusTable v-bind:list="devises"/>
        </div>
</template>

<script>
// 这个面包屑是共有组件
import NewDevice from '../../../../components/IotPlatfrom/DeviceSimulator/NewDevice'
import Breadcrumb from '../../../../components/IotPlatfrom/commont/Breadcrumb'
import StatusTotal from '../../../../components/IotPlatfrom/DeviceStatus/StatusTotal'
import StatusTable from '../../../../components/IotPlatfrom/DeviceStatus/StatusTable'
import axios from 'axios'
export default {
  name:"DeviceStatus",
  components:{
    Breadcrumb,
    StatusTotal,
    StatusTable,
    NewDevice
  },
  data(){
    return{
        timer:null,
        mypath:"",
        devises:[],
         devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"设备管理",
                secondtitle:"设备状态"
            },
        
        
    }
  },
  beforeDestroy(){
    clearTimeout(this.timer)
  },

  created(){
     this.mytimer()
  },
  methods:{
     mytimer(){
       let this_ = this
       this_.timer = setInterval(function getdata() {
        
         this_.mypath = window.g.device_list
        axios.get(this_.mypath,{
            headers:{
          Authorization:localStorage.getItem('Authorization')
      }
         })
         .then(response =>{
           console.log(response.data)
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          if(response.data.message===44||response.data.message===40){
               this_.$message.error("权限认证失效，请重新登录")
                this_.$router.push('/Login');
          }
         this_.devises=response.data.data
        //console.log(response.data)
         
         })
      },2000)
    }
  },


}
</script>
