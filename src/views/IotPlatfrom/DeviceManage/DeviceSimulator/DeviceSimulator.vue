<template>
<!-- 设备模拟器 -->
 <div>
    <Breadcrumb :home="devicetitle"/>
   <div> 
     <NewDevice/>
    <a-divider />
    </div>
   <SimulatorCard/>
 </div>
</template>

<script>
import Breadcrumb from '../../../../components/IotPlatfrom/commont/Breadcrumb'
import SimulatorCard from '../../../../components/IotPlatfrom/DeviceSimulator/SimulatorCard'
import NewDevice from '../../../../components/IotPlatfrom/DeviceSimulator/NewDevice'
export default {
  name:"DeviceSimulator",
  components:{
    Breadcrumb,
    SimulatorCard,
     NewDevice
  },
  data(){
    return{
          devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"设备模拟器",
                secondtitle:"设备模拟器"
            }
    }
  }
}
</script>
<style scoped>
.newdevice{
  margin-left: .375rem;
}
</style>