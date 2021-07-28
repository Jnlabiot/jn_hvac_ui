<template>
        <div style="overflow:auto" class="layout">
       <div class="left">
           <h1 style="text-align: center; font-size:2em; margin: .67em 0; ">帐篷监控</h1>
          
           <LeftTop/>
           <LetfButton/>
        </div>
       <div class="right">
        <h1 style="text-align: center; font-size:2em; margin: .67em 0;">帐篷传感器</h1>
           <div class="right_left">
        
               <Temperature  v-bind:temperature="data"/>
            
               <Co2 v-bind:dataco2="data"/>
           </div>
           <div class="right_right">
               <Humidity v-bind:humidity="data"/>
               <WaterSpeed v-bind:waterspeed="data"/>
           </div>
       </div>
    </div>
</template>
<style src="./BigScreen.css">

</style>
<script>

import LeftTop from '../../../components/IotPlatfrom/BigScreen/Left/LeftTop.vue'
import LetfButton from '../../../components/IotPlatfrom/BigScreen/Left/LeftButton.vue'
import Co2 from '../../../components/IotPlatfrom/BigScreen/Right/Co2.vue'
import Humidity from '../../../components/IotPlatfrom/BigScreen/Right/Humidity.vue'
import Temperature from '../../../components/IotPlatfrom/BigScreen/Right/Temperature.vue'
import WaterSpeed from '../../../components/IotPlatfrom/BigScreen/Right/WaterSpeed.vue'
export default {
    components:{
        LeftTop,
        LetfButton,
        Co2,
        Humidity,
        Temperature,
        WaterSpeed
    },
   data(){
     return{
       data:{
          hardwareId:888,
            humidity:"34.5",
            co2:"34.5",
            temperature:"12.6",
            waterSpeed:"12.3",
            time:2374
       }
     }
   },
  computed: {
 tent_sensor(){
    return this.$store.state.tentsensor;　　//需要监听的数据
  }
},
watch: {
     deep: true,
  	immediate: true,
  tent_sensor(newVal, oldVal) {
    //do something
    let this_1 =this
     this_1.data = newVal
    // console.log(newVal)
    }
  
},
}
</script>