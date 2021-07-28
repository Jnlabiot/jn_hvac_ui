<template>
  <div class="live_right_top">
                    <!-- 电量 -->
                   <div class="live_senser">
                       <div class="dianya">
                        <h3>a相电压</h3>
                        <h3>{{mypower.UA}}</h3>
                       </div>

                       <div class="dianliu">
                        <h3>a相电流</h3>
                        <h3>{{mypower.IA}}</h3>
                       </div>

                        <div class="gonglv">
                            <h3>a相有功功率</h3>
                            <h3>{{mypower.PA}}</h3>
                        </div>
                       
                        <div class="wendu">
                            <h3>温度</h3>
                            <h3>{{machine.temperature}}</h3>
                        </div>
                       
                        <div class="shidu">
                         <h3>湿度</h3>
                         <h3>{{machine.humidity}}</h3>
                        </div>
                           <div class="senser_co2">
                         <h3>co2</h3>
                         <h3>{{machine.co2}}</h3>
                        </div>
                   </div>
                    <div id="electricity" class="live_electricity_line">

                   </div>
                      <!-- 传感器温度，湿度，co2-->
      
                </div>
</template>
<style src="./Senser.css" scoped>

</style>
<script>
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';
import { number } from 'echarts/core';

echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer,DataZoomComponent]
);

export default {
    data(){
        return{
            mypower:{
                IA: "2204",
                KWH: "13",
                PA: "2204",
                UA: "2204",
                hardwareid: 111,
                id: "d01beff1-f592-4d7d-ac11-1a082c64348e",
                time: 1621667238
            },
            Xpower:[],
            Ypower:[],
                    machine:{
          cTIWTem: "36.0",
          cTOWTem: "36.0",
          co2: "488",
          fIWTem: "36.0",
          fOwTem: "36.0",
          hardwareid: 888,
          humidity: "32.5",
          id: "49830376-6e41-450d-9bcb-bcf13ab7c4f1",
          temperature: "27.5",
          time: 1621859283,
          waterSpeed: "7.2",
        }
        }
    },
     mounted(){

      this. drawLine()

},
computed:{
    power(){
        return this.$store.state.power
    },
        datasenser(){
      return this.$store.state.tentsensor
    },
},
watch:{
    deep: true,
	immediate: true,
     power(n,o){
         let this_1=this
         this_1.mypower=n
        let myDate = new Date()
        let year = myDate.getFullYear().toString()+'/'
        let mytime = this_1.getCurrentTime().toString()
        this_1.Xpower.push(mytime)
        this_1.Xpower = this_1.Xpower.map(function(str){
            return str.replace(year, '');//去掉年份
        })
        console.log("电量",n)
        this_1.Ypower.push(n.KWH)
       this_1.myChart.setOption(    {
            
         xAxis: {
                data: this_1.Xpower
            },
              series: {
                name: "当前总有功电能",
                type: "line",
                data: this_1.Ypower
            }
        })
    },
    // 温度，湿度,co2
        datasenser(n,o){
         let this_1=this
        console.log("machineroom222",n)
        this_1.machine=n
    }
},

    methods:{
         getCurrentTime () {
      let date = new Date()
      let Y = date.getFullYear()
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      let D = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()
      let hours = date.getHours()
      let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
      let seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds()
      date = Y + '/' + M + '/' + D + ' ' + hours + ':' + minutes + ':' + seconds
      // console.log(date)  //2019/10/12 15:19:33
      return date
    },
        drawLine(){
           let chartDom = document.getElementById("electricity")
        this.myChart = echarts.init(chartDom);
      
        
       this.myChart.setOption(
                   {
            title:{
                text:"当前总有功电能"
            },
            color: ["#3398DB"],
            tooltip: {
                trigger: "axis"
            },
            xAxis: {
                data: []
            },
            yAxis: {
                splitLine: {
                show: false
                }
            },
            dataZoom: [{
                start:80,
                end:100
            }],
            series: {
                name: "当前总有功电能",
                type: "line",
                data: []
            }
            }

        )
      }

}
}
</script>