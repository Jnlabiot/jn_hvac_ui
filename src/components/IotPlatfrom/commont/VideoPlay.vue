<template>
    <a-modal
 :visible="visible"
 title="创建设备"
 @cancel="handleCancel"
  @create="handleCreate">
    <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch></LivePlayer>
</a-modal>
</template>
<script>
import LivePlayer from '@liveqing/liveplayer'

export default {
    props:['videoUrl','visible'],
     components: {
    LivePlayer
  },
  beforeCreate(){
      this.videoUrl=""
  },

}
</script>