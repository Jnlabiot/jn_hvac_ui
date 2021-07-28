<template>
       <div id="contain_3dscatter" class="classroom_3dscatter">
            
       </div>
</template>
<style src="./Classroom3dscatter.css" scoped>

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
import { TooltipComponent } from 'echarts/components'
import { AxisPointerComponent } from 'echarts/components'
import { CalendarComponent } from 'echarts/components';
import { LegendComponent } from 'echarts/components';
import { TimelineComponent } from 'echarts/components';
import { DataZoomComponent } from 'echarts/components';
import { TitleComponent } from 'echarts/components';
import { ToolboxComponent } from 'echarts/components';
echarts.use([ToolboxComponent]);
echarts.use([TooltipComponent]);
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
    name:"Classroom3dscatter",
    computed: {
  store3dscatter () {
    return this.$store.state.scatter3d;　　//需要监听的数据
  }
},
watch: {
  store3dscatter (newVal, oldVal) {
    //do something
  
      this.myChart.setOption({
            series: [{
                    type: 'scatter3D',
                    data: newVal
                }]
      })
    }
  
},
  mounted(){
      this.draw3Dscatter()
      window.addEventListener("resize", () => { 
      this.myChart.resize();  
});
  },
  methods:{
      draw3Dscatter(){
          var chartDom = document.getElementById('contain_3dscatter');
            this.myChart = echarts.init(chartDom);
         
            let this_1 = this
       

            this_1.myChart.setOption( {
                 tooltip: {
                trigger: "item"
            },
                visualMap: {
                    show: true,
                    min: 20,
                    max: 35,
                    itemWidth: 20,
                    itemHeight: 400,
                     align: 'left', 
                    inRange: {
                        symbolSize: [25,25],//图元的大小
                        // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
                        color:['#1B185D','#0100BD','#0008FB','#0380F8','#00A4FF','#00E8F3','#2DFDC9','#7BFA85','#ADFE47','#FDF00C','#FFCB06','#FFAF07','#FF7700','#FF4D02','#A90500','#680603'],
                        colorAlpha: [1, 1]//颜色的透明度
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
                        lineStyle: { color:'#000000' }
                    },
                    axisPointer: {//坐标轴指示线
                        show:true,
                        lineStyle: { color: '#000000' }
                    },
                    viewControl: {
                         autoRotate: false//自动旋转
                    },
                   
                },
                series: [{
                    name:"温度",
                    type: 'scatter3D',
                    data:  this_1.$store.state.scatter3d
                }]
            });

          

    
      }
  }
    
}
</script>