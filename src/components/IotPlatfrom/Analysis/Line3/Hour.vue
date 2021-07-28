<template>

      <div id="hourmessage2"  style="width:100%;height:6.25rem">
          
        </div>

        
</template>

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
import { TooltipComponent } from 'echarts/components';
echarts.use([TooltipComponent]);
echarts.use(
    [GridComponent, LineChart, CanvasRenderer]
);
export default {
   name:"Hour",
   data(){
      return{
         myChart:null,
      }
   },
   mounted(){
      this.pattingmessage()
               let that = this 
     window.onresize = function(){
    window.addEventListener("resize", () => { 
    that.myChart.resize();
  });
    //myChart1.resize();    //若有多个图表变动，可多写
 
}
   },
   methods:{
       pattingmessage(){
          var chartDom = document.getElementById('hourmessage2');
          this.myChart = echarts.init(chartDom);
          this.myChart.setOption(
              {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
        tooltip: {
                trigger: "axis"
            },
    series: [{
          name: '设备消息数量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        //   smooth: true,
        areaStyle: {}
    }]
}
          )
       }
   }
}
</script>