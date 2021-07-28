<template>
  <div>
    <a-tabs default-active-key="1" @change="callback" >
  <a-tab-pane key="1" tab="监控摄像头">
       <GB281List/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="普通视频流" force-render>
       <ConmonList/>
      </a-tab-pane>
 
    </a-tabs>

  </div>
</template>
<script>
import GB281List from './GB281List.vue'
import ConmonList from './ConmonList.vue'

export default {
  data() {
    return {
       
    };
  },
  components:{
     GB281List,
     ConmonList,
  
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>