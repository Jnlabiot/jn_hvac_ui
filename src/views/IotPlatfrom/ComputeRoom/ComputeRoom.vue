<template>
<!-- 机房 -->
  <div class="home">
    <h1 style="font-size:2em; margin: .67em 0 ">基于中央空调多模态能效数据融合的节能控制系统</h1>
      <div class="contain">
          <img src="../../../assets/IotPlatfrom/机房2-20.png" alt="图片加载失败" class="jifangimg">
          <Total/>
          <CoolingTower/>
          <CoolingPump/>
          <Host/>
          <FreezePump/>
      </div>
  </div>
</template>
<style src="./ComputeRoom.css" scoped>

</style>
<script>
// @ is an alias to /src

import CoolingTower from '../../../components/IotPlatfrom/ComputeRoom/CoolingTower/CoolingTower.vue'
import CoolingPump from '../../../components/IotPlatfrom/ComputeRoom/CoolingPump/CoolingPump.vue'
import Host from '../../../components/IotPlatfrom/ComputeRoom/Host/Host.vue'
import FreezePump from '../../../components/IotPlatfrom/ComputeRoom/FreezePump/FreezePump.vue'
import Total from '../../../components/IotPlatfrom/ComputeRoom/Total/Total.vue'
export default {
  name:"ComputeRoom",
  components:{
    CoolingTower,
    CoolingPump,
    Host,
    FreezePump,
    Total
  }
}
</script>
