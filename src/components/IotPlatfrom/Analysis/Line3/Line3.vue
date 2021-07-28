<template>
<div  style="width: 98%; height:65%;margin: 0 auto; background-color: #fff;">
  <a-tabs type="card" @change="callback" style=" height:100%">
    <a-tab-pane key="1" tab="1小时" >
   <Hour/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="1天" >
     <Day/>
    </a-tab-pane>
    <a-tab-pane key="3" tab="1个月" >
     <Mounth/>
    </a-tab-pane>
        <a-button slot="tabBarExtraContent">
      设备消息
    </a-button>
  </a-tabs>
</div>

</template>
<style scoped>

</style>
<script>
import Hour from './Hour.vue'
import Day from './Day.vue'
import Mounth from './Mounth.vue'
export default {
   name:"Line3",
  data() {
    return {};
  },
  components:{
       Hour,
       Day,
       Mounth
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>