<template>
        <div id="jvm" class="analysis_jvm"></div>
</template>
<style scoped src="./Line2jvm.css">

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
    name:"Line2jvm",
    data(){
        return{
            myChart:null,
        }
    },
    mounted(){
        this.patingjvm()
        let that=this
     window.onresize = function(){
    window.addEventListener("resize", () => { 
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
        patingjvm(){
            var chartDom = document.getElementById('jvm');
            this.myChart = echarts.init(chartDom);
             this.myChart.setOption(
                 {
    series: [{
        type: 'gauge',
        min: 0,
        max: 4,
        progress: {
            show: true,
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
        splitLine: {
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            distance: 25,
            color: '#999',
            fontSize:  this.fontSize(0.1)
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
             formatter: '{value}G'//匹配字符串
        },
        data: [{
            value: 0.3
        }]
    }]
}
             );
        }
    },

}
</script>