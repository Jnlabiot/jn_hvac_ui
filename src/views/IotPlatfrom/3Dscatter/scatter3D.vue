<template>
      <div class="bg">
        <ScatterLeft/>
        <ScatterRight/>
    </div>
</template>
<style  scoped>
.bg{
    width: 100%;
    height: 100%;
    /* background-color:aquamarine; */
    overflow: auto;
  
}
</style>
<script>
import ScatterRight from '../../../components/IotPlatfrom/3Dscatter/ScatterRight'
import ScatterLeft from '../../../components/IotPlatfrom/3Dscatter/ScatterLeft'
export default {
  name:"scatter3D",
  components:{
    ScatterLeft,
    ScatterRight
  },
}
</script>

