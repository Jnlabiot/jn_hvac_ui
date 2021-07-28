<template>
        <div class="live_bg">
        <!-- 上面是视频，下面是温度场 -->
        <div class="live_title"><h1 style="font-size:2em; ">现场情况</h1></div>
        <div class="live_contain">
            <div class="live_left">
                <Video/>
                <Scatter/>
               <!--  实时视频<div class="live_left_top"> 

                </div> -->
                <!-- 温度场<div class="live_left_bottom">

                </div> -->

            </div>
            <div class="live_right">
                <Senser/>
                <MachineRoom/>
                <!--  各种传感器 
                    <div class="live_right_top">
                  
                         <div class="senser"></div>
                         <div class="realtime_electricity"></div>
                </div> -->
                <!-- 机房画图
                <div class="live_right_bottom">
      
                </div> -->
            </div>
        </div>
   
    </div>
</template>

<style src="./Live.css" scoped>

</style>
<script>
import Video from '../../../components/IotPlatfrom/Live/Video/Video'
import Scatter from '../../../components/IotPlatfrom/Live/Scatter/Scatter'
import Senser from '../../../components/IotPlatfrom/Live/Senser/Senser'
import MachineRoom from '../../../components/IotPlatfrom/Live/MachineRoom/MachineRoom'
export default {
    data(){
        return{

        }
    },
    components:{
        Video,
        Scatter,
        Senser,
        MachineRoom
    },
    methods:{
        
    }
}
</script>