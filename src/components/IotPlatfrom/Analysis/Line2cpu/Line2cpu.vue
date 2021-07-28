<template>
      <div class="analysis_cpu" id="cpu"></div>
</template>
<style scoped src="./Line2cpu.css">

</style>
<script>
import * as echarts from 'echarts/core';
import {
    GaugeChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [GaugeChart, CanvasRenderer]
);
export default {
    name:"Line2cpu",
    data(){
        return{
           myChart:null,
        }
    },
  mounted(){
      this.paintingcpu()
       let that = this 
     window.onresize = function(){
    window.addEventListener("resize", () => { 
         console.log("resize2")
    that.myChart.resize();
  });
    //myChart1.resize();    //若有多个图表变动，可多写
 
}
  },
    methods:{
       fontSize(res){

        let docEl = document.documentElement,

          clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

           if (!clientWidth) return;

           let fontSize = 100 * (clientWidth / 1920);

           return res*fontSize;

},
        paintingcpu(){
            var chartDom = document.getElementById('cpu');
            this.myChart = echarts.init(chartDom);
             this.myChart.setOption(
                 {
    series: [{
    
        type: 'gauge',
        progress: {//当前进度
            show: true,//进度条
            width: 18
        },
        axisLine: {
            lineStyle: {
                width: 18
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {//分割线样式
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {//刻度标签
            distance: 25,
            color: '#999',
            fontSize: this.fontSize(0.10)
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
                borderWidth: 10
            }
        },
        title: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: this.fontSize(0.2),
            offsetCenter: [0, '70%'],
             formatter: '{value}%'//匹配字符串
        },
        data: [{
            value: 70
        }]
    }]
}
             );
        }
    }
}
</script>