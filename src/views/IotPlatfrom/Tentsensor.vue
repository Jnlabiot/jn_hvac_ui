<template>
<!-- 帐篷传感器数据可视化 -->
 <div class="maindata">
        <h1 style="font-size:2em; margin: .67em 0 ">帐篷实时数据可视化</h1>
        <div class="echartcontain">
          <Temperature v-bind:temperature="data"/>
               <Humidity v-bind:humidity="data" />
                <Co2 v-bind:dataco2="data" />
             <Waterspeed v-bind:waterspeed="data"/>
    </div>
  </div>
</template>
<style scoped>
.maindata h1{
    text-align: center;
}
.echartcontain{
    margin: 0 auto;
    padding: 0;
    position: relative;
    width:16.8rem;
    height:10rem;
   
}
.co2_contain{
  display: inline;
}
</style>
<script>
'../../utils/websocket.js'
import Co2 from '../../components/IotPlatfrom/Tentsensor/Co2/Co2'
import Humidity from '../../components/IotPlatfrom/Tentsensor/Humidity/Humidity'
import Temperature from '../../components/IotPlatfrom/Tentsensor/Temperature/Temperature'
import Waterspeed from '../../components/IotPlatfrom/Tentsensor/Waterspeed/Waterspeed'
export default {
  components:{
    Temperature,
    Humidity,
    Co2,
    Waterspeed
  },
  data() {
      return{
        path:"",
        data:
            {
            hardwareId:888,
            humidity:"34.5",
            co2:"34.5",
            temperature:"12.6",
            waterSpeed:"12.3",
            time:2374
            },
   
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
    //  console.log(newVal)
    }
  
},
 
}
</script>
