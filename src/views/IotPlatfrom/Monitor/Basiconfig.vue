<template>
   <div  style="background-color: #F0F2F5;width:100%;height:100%">
       <Breadcrumb :home="devicetitle"/>
       <Basiconfig/>
   </div>
</template>
<script>
import Breadcrumb from '../../../components/IotPlatfrom/commont/Breadcrumb.vue'
import Basiconfig from '../../../components/IotPlatfrom/Monitor/Basiconfig/Basiconfig.vue'
import LivePlayer from '@liveqing/liveplayer'
export default {
    data(){
       return{
           videoUrl:"https://wyutui.mynatapp.cc/live/stream.flv",
               devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"视频网关",
                secondtitle:"基本配置"
            },
       }
    },
    components:{
        LivePlayer,
        Basiconfig,
        Breadcrumb
    }
}
</script>