<template>
<!-- 湿度 -->
<div class="Humidity_contain">
     <div id="humidity_1" class="humidity"></div>
</div>
</template>
<style src="./Humidity.css" scoped>

</style>
<style scoped>
.Humidity_contain{
    display: inline;
}
</style>
<script>
import * as echarts from 'echarts/core';
import {
    GridComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [GridComponent, LineChart, CanvasRenderer]
);
export default {
    name:"Humidity",
    props:['humidity'],
    data(){
        return{
            myChart:{},
             Xhumidity:[],
            Yhumidity:[],
        }
    },
    mounted(){
      this.drawLine()
},
watch:{
    deep: true,
	immediate: true,
    humidity(n,o){
       let this_1=this
        let myDate = new Date()
        let year = myDate.getFullYear().toString()+'/'
        let mytime = this_1.getCurrentTime().toString()
        this_1. Xhumidity.push(mytime)
        this_1. Xhumidity = this_1. Xhumidity.map(function(str){
            return str.replace(year, '');//去掉年份
        })
        this_1. Yhumidity.push(n.waterSpeed)
       this_1.myChart.setOption(    {
            
         xAxis: {
                data: this_1. Xhumidity
            },
              series: {
                name: "湿度",
                type: "line",
                data: this_1. Yhumidity
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
     //  console.log(date)  //2019/10/12 15:19:33
      return date
    },
      drawLine(){
           let chartDom = document.getElementById("humidity_1")
          this.myChart = echarts.init(chartDom);
      
        
       this.myChart.setOption(
            {
            title:{
                text:"湿度"
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
                start:70,
                end:100
            }],
            series: {
                name: "湿度",
                type: "line",
                data: []
            }
            }
        )
      }
    }
}
</script>