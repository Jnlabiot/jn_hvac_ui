<template>
    <div>
         <Breadcrumb :home="devicetitle"/>
         <SearchWaning/>
         <DeviceWaning/>
    </div>
</template>
<script>
import SearchWaning from '../../../../components/IotPlatfrom/DeviceWaning/SearchWaning.vue'
import Breadcrumb from '../../../../components/IotPlatfrom/commont/Breadcrumb.vue'
import DeviceWaning from '../../../../components/IotPlatfrom/DeviceWaning/DeviceWaning.vue'
export default {
   
    data(){
      return{
               devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"设备管理",
                secondtitle:"设备报警"
            },
      }
    },
    components:{
         Breadcrumb,
         DeviceWaning,
         SearchWaning
    }
}
</script>