<template>
  <div style="background-color: #fff;width:80%;margin:0 auto;">
    <a-tabs default-active-key="1" @change="callback" >
      <a-tab-pane key="1" tab="流媒体服务器配置">
        <ServerSrs/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="GB28181/2016" force-render>
        <GB28181/>
      </a-tab-pane>
       <a-tab-pane key="3" tab="非摄像头视频流播放" force-render>
        <OtherVider/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import ServerSrs from './ServerSrs.vue'
import GB28181 from './GB28181.vue'
import OtherVider from './OtherVider.vue'
export default {
  data() {
    return {};
  },
  components:{
    ServerSrs,
    GB28181,
     OtherVider
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>