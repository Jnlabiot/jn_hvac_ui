<template>

      <div id="daymessage2" style="width:21.25rem;height:6.25rem" >
          
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
   name:"Day",
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
          var chartDom = document.getElementById('daymessage2');
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