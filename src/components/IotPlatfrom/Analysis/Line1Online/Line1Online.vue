<template>
        <div id="online" class="analysis_online"></div>
</template>
<style scoped src="./Line1Online.css">

</style>
<script>
import * as echarts from 'echarts/core';
import {
    GridComponent
} from 'echarts/components';
import {
    BarChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';
import { TooltipComponent } from 'echarts/components';
echarts.use([TooltipComponent]);
echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);
export default {
      name:"Line1Online",
      data(){
            return{
            myChart:null,
            }
      },
      mounted(){
          this.patingonline()
                 let that = this 
     window.onresize = function(){
    window.addEventListener("resize", () => { 
          console.log("resize1")
    that.myChart.resize();
  });
    //myChart1.resize();    //若有多个图表变动，可多写
 
}
      },
      methods:{
          patingonline(){
                var chartDom = document.getElementById('online');
                this.myChart = echarts.init(chartDom);
                this.myChart.setOption(
                      {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
        tooltip: {
                trigger: "axis"
            },
    series: [{
           name: '设备在线量',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}
                );
          }
      },
}
</script>