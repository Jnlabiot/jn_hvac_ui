<template>
      <div id="Water_speed" class="water_speed"></div>
</template>
<style scoped>
 .water_speed{
     margin-top: 2%;
    width: 100%;
    height: 49%;
    /* background-color:slategray; */
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
    name:"WaterSpeed",
    props:['waterspeed'],
    data(){
        return{
            myChart:{},
              Xwater:[],
            Ywater:[],
        }
    },
     mounted(){
      this.drawLine()
},
   watch:{
    deep: true,
	immediate: true,
    waterspeed(n,o){
        let this_1=this
        let myDate = new Date()
        let year = myDate.getFullYear().toString()+'/'
        let mytime = this_1.getCurrentTime().toString()
        this_1.Xwater.push(mytime)
        this_1.Xwater = this_1.Xwater.map(function(str){
            return str.replace(year, '');//去掉年份
        })
        this_1.Ywater.push(n.waterSpeed)
       this_1.myChart.setOption(    {
            
         xAxis: {
                data: this_1.Xwater
            },
              series: {
                name: "水流速度",
                type: "line",
                data: this_1.Ywater
            }
        })
    }
},

    methods:{
         // new Date() 获取当前标准时间，转为：YYYY-MM-DD h:m:s (年月日 时分秒) 格式
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
           let chartDom = document.getElementById("Water_speed")
        this.myChart = echarts.init(chartDom);
      
        
       this.myChart.setOption(
            
            {
            title:{
                text:"水流速度"
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
                name: "水流速度",
                type: "line",
                data: []
            }
            }
        )
      }
    }
}
</script>