<template>
<!-- 帐篷监控 -->
   <div class="jiankong">
    <Jiankong01/>
    <Jiankong02/>
        </div>
</template>

<script>
// @ is an alias to /src

import Jiankong01 from "../../components/IotPlatfrom/TentMonitor/Jiankong01"
import Jiankong02 from "../../components/IotPlatfrom/TentMonitor/Jiankong02"
export default {
  name:"Home",
  components:{
      Jiankong01,
      Jiankong02
  }
}
</script>
<style scoped>
/*总的监控范围*/
.jiankong{
    margin: 0 auto;
    width: 18.75rem;
  
   
}

</style>