<template>
                  <div class="classroom_botom">
            <!-- 风机等数据 -->
            
            <div class="classroom_fengji">
                <div class="classroom_AHU2">
                    <img style="width: 80%;margin-top: 10%;" src="../../../../assets/classroomlive/AHU.png" alt="" srcset="">
                    <h1 style="font-size: .3125rem ;" class="classroom_AHU2_name">AHU2</h1>
                    <h1 style="font-size: .3125rem;" class="classroom_AHU2_value">{{classroom_205.AHU2_205.toString().slice(0.3)}} </h1>
                    <!-- 这个风扇可根据数据绑定是否转动 -->
                    <img src="../../../../assets/classroomlive/Fan(Green)-state1.png" class="green_fan" alt="" srcset="">

                </div>
                <div class="classroom_PHU2">
                    <img style="width: 80%;margin-top: 10%;" src="../../../../assets/classroomlive/AHU.png" alt="" srcset="">
                    <h1 style="font-size: .3125rem;" class="classroom_PHU2_name">PAU2</h1>
                    <h1 style="font-size: .3125rem;" class="classroom_pHU2_value">{{classroom_205.PAU2_205.toString().slice(0,4)}} </h1>
                     <!-- 这个风扇可根据数据绑定是否转动 -->
                      <img src="../../../../assets/classroomlive/Fan(Green)-state1.png" class="green_fan" alt="" srcset="">
                </div>
                <div class="classroom_PHU1">
                    <img style="width: 80%;margin-top: 10%;" src="../../../../assets/classroomlive/AHU.png" alt="" srcset="">
                    <h1 style="font-size: .3125rem;" class="classroom_PHU1_name">PAU1</h1>
                    <h1 style="font-size: .3125rem;" class="classroom_PHU1_value">{{classroom_205.PAU1_205.toString().slice(0,4)}} </h1>
                      <!-- 这个风扇可根据数据绑定是否转动 -->
                      <img src="../../../../assets/classroomlive/Fan(Green)-state1.png" class="green_fan" alt="" srcset="">
                </div>
                <div class="classroom_AHU1">
                    <img style="width: 80%;margin-top: 10%;" src="../../../../assets/classroomlive/AHU.png" alt="" srcset="">
                    <h1 style="font-size: .3125rem;" class="classroom_AHU1_name">AHU1</h1>
                    <h1 style="font-size: .3125rem;" class="classroom_AHU1_value">{{classroom_205.AHU1_205.toString().slice(0,4)}} </h1>
                      <!-- 这个风扇可根据数据绑定是否转动 -->
                      <img src="../../../../assets/classroomlive/Fan(Green)-state1.png" class="green_fan" alt="" srcset="">
                </div>
            </div>
            <!-- 传感器等数据 -->
            <div class="classroom_senser">
               <div class="classroom_left_temperature">
                <h1 style="font-size: .3125rem;margin-top: .3125rem;">室内温度</h1>
                <h1 style="font-size: .3125rem;">{{classroom_205.temperature_205.toString().slice(0,5)}} &#8451;</h1>
               </div>
               <div class="classroom_left_co2">
                <h1 style="font-size: .3125rem;margin-top: .3125rem;">CO2浓度</h1>
                <h1 style="font-size: .3125rem;"> {{classroom_205.co2_205.toString().slice(0,5)}} </h1>
             
               </div>
               <div class="classroom_left_humidity">
                <h1 style="font-size: .3125rem;margin-top: .3125rem;">室内湿度</h1>
                <h1 style="font-size: .3125rem;">{{classroom_205.humidity_205.toString().slice(0,5)}}%</h1>
               </div>

            </div>
       </div>
</template>
<style src="./ClassroomBotom.css" scoped>

</style>
<script>
export default {

    data(){
        return{

            classroom_205:{
                AHU1_201: 25.50,
                AHU1_202: 24.50,
                AHU1_203: 29.00,
                AHU1_204: 29.00,
                AHU1_205: 28.50,
                AHU2_201: 25.50,
                AHU2_202: 29.00,
                AHU2_203: 25.50,
                AHU2_204: 28.50,
                AHU2_205: 20.00,
                PAU1_201: 15.00,
                PAU1_202: 30.40,
                PAU1_203: 30.50,
                PAU1_204: 29.30,
                PAU1_205: 28.00,
                PAU2_201: 16.00,
                PAU2_202: 29.40,
                PAU2_203: 29.00,
                PAU2_204: 29.60,
                PAU2_205: 28.00,
                co2_201: 445,
                co2_202: 424,
                co2_203: 459,
                co2_204: 436,
                co2_205: 420,
                fan_201: false,
                fan_202: false,
                fan_203: false,
                fan_204: false,
                fan_205: false,
                humidity_201: 63.8,
                humidity_202: 82.4,
                humidity_203: 81.7,
                humidity_204: 79.4,
                humidity_205: 84.0,
                temperature_201: 24.1,
                temperature_202: 25.9,
                temperature_203: 27.1,
                temperature_204: 28.5,
                temperature_205: 28.2,
            }
        }
    },
computed: {
  classroomlive() {
    return this.$store.state.classroomlive_205;　　//需要监听的数据
  }
},
watch: {
    deep:true,
  classroomlive(newVal, oldVal) {
    //do something
    this. classroom_205=newVal
      
     console.log("云龙的数据205",newVal)
    }
     
},
methods:{

},

}
</script>