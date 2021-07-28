<template>
     <div id="contain_3dscatter" class="left_button"></div>
</template>
<style scoped>
.left_button{
    margin-top: 4%;
    /* background-color: purple; */
    width: 100%;
    height: 48%;
}
</style>
<script>
import * as echarts from 'echarts/core';
import {
    VisualMapComponent
} from 'echarts/components';
import {
    CanvasRenderer
} from 'echarts/renderers';
import {
    Scatter3DChart
} from 'echarts-gl/charts';
import {
    Grid3DComponent
} from 'echarts-gl/components';
import { registerLayout } from 'echarts/core';
import { AxisPointerComponent } from 'echarts/components'
import { CalendarComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';
import { TimelineComponent } from 'echarts/components';
import { DataZoomComponent } from 'echarts/components';
import { TitleComponent } from 'echarts/components';
import { ToolboxComponent } from 'echarts/components';
echarts.use([ToolboxComponent]);
echarts.use([TitleComponent]);
echarts.use([DataZoomComponent]);
echarts.use([TimelineComponent]);
echarts.use([LegendComponent]);
echarts.use([CalendarComponent]);
echarts.use([AxisPointerComponent])
echarts.use(
    [VisualMapComponent, Grid3DComponent, Scatter3DChart, CanvasRenderer]
);
export default {
    name:"LeftButton",
    data(){
      return{
           myChart:{}
      }
    
  },
  mounted(){
      this.draw3Dscatter()
      window.addEventListener("resize", () => { 
      this.myChart.resize();  
});
},
created(){
    console.log("大屏展示",this.$store.state.scatter3dTent)
},
computed: {
  store3dscatterTent () {
    return this.$store.state.scatter3dTent;　　//需要监听的数据
  }
},
watch: {
    deep:true,
  store3dscatterTent (newVal, oldVal) {
    //do something
    console.log("大屏展示帐篷温度场",newVal)
      this.myChart.setOption({
            series: [{
                    type: 'scatter3D',
                    data: newVal
                }]
      })
    }
  
},
    methods:{
      draw3Dscatter(){
          var chartDom = document.getElementById('contain_3dscatter');
            this.myChart = echarts.init(chartDom);
         
            let this_1 = this
             let myvalue
            //  var noise = new SimplexNoise(Math.random);
             //my
             function randomRange(min, max) { // min最小值，max最大值
                return Math.floor(Math.random() * (max - min)) + min;
            }
            function generateData(theta, min, max) {
                var data = [];
                for (var i = 0; i <= 20; i++) {
                    for (var j = 0; j <= 20; j++) {
                        for (var k = 0; k <= 20; k++) {
                            // var value = noise.noise3D(i / 10, j / 10, k / 10);
                            // valMax = Math.max(valMax, value);
                            // valMin = Math.min(valMin, value);
                            // myvalue = value*2+4
                          // data.push([i, j, k, value * 2 + 4]);
                             data.push([i, j, k, randomRange(20,35)]);
                            
                        }
                    }
                }
                 
                return data;
              
            }
           
            // var valMin = Infinity;
            // var valMax = -Infinity;
            var data = generateData(2, -5, 5);
       

            this_1.myChart.setOption( {
             title: {
                text: `温度场`
                },
                  tooltip: {
                trigger: "item"
            },
                visualMap: {
                    show: true,
                    min: 20,
                    max: 35,
                    inRange: {
                        symbolSize: [25, 25],
                          color:['#1B185D','#0100BD','#0008FB','#0380F8','#00A4FF','#00E8F3','#2DFDC9','#7BFA85','#ADFE47','#FDF00C','#FFCB06','#FFAF07','#FF7700','#FF4D02','#A90500','#680603'],
                        colorAlpha: [1, 1]
                    }
                },
                xAxis3D: {
                    type: 'value'
                },
                yAxis3D: {
                    type: 'value'
                },
                zAxis3D: {
                    type: 'value'
                },
                grid3D: {
                    axisLine: {
                        show:true,
                        lineStyle: { color: '#000000' }
                    },
                    axisPointer: {
                        show:true,
                        lineStyle: { color: '#000000' }
                    },
                    viewControl: {
                         autoRotate: false//自动旋转
                    }
                },
                series: [{
                    name:"温度",
                    type: 'scatter3D',
                    data: this.$store.state.scatter3dTent
                }]
            });

          

    
      }
  }
 
}
</script>