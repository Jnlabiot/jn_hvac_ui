<template>
       <div  style="width:100%;height:100%">
       <Breadcrumb :home="devicetitle"/>
      <VideoDevices/>
   </div>
</template>
<script>
import Breadcrumb from '../../../components/IotPlatfrom/commont/Breadcrumb.vue'
import VideoDevices from '../../../components/IotPlatfrom/Monitor/VideoDevices/VideoDevices.vue'
export default {
    data(){
        return{
             devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"视频网关",
                secondtitle:"基本配置"
            },
        }
    },
    components:{
        Breadcrumb,
        VideoDevices
    },
}
</script>