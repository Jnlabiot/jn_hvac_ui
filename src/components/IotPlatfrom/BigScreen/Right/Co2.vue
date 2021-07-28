<template>
      <div id="Co2" class="co2"></div>
</template>
<style scoped>
.co2{
    margin-top: 2%;
    width: 100%;
    height: 49%;

    /* background-color: salmon; */
}
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
    name:"Co2",
        props:['dataco2'],
    data(){
        return{
         
            Xco2:[],
            Yco2:[],
            myChart:{},  
            socket:"",
           
        }
    },
    mounted(){

      this. drawLine()

},
watch:{
    deep: true,
	immediate: true,
    dataco2(n,o){
         let this_1=this
        let myDate = new Date()
        let year = myDate.getFullYear().toString()+'/'
        let mytime = this_1.getCurrentTime().toString()
        this_1.Xco2.push(mytime)
        this_1.Xco2 = this_1.Xco2.map(function(str){
            return str.replace(year, '');//去掉年份
        })
        this_1.Yco2.push(n.co2)
       this_1.myChart.setOption(    {
            
         xAxis: {
                data: this_1.Xco2
            },
              series: {
                name: "Co2浓度",
                type: "line",
                data: this_1.Yco2
            }
        })
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
           let chartDom = document.getElementById("Co2")
        this.myChart = echarts.init(chartDom);
      
        
       this.myChart.setOption(
                   {
            title:{
                text:"Co2"
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
                name: "Co2浓度",
                type: "line",
                data: []
            }
            }

        )
      }

}
}

</script>