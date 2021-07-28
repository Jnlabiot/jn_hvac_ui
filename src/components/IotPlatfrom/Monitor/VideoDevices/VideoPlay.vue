<template>
    <a-modal
 :visible="myvisible"
 title="视频流播放"
 @cancel="handleCancel"
  @create="handleCreate">
    <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch></LivePlayer>
</a-modal>
</template>
<script>
import LivePlayer from '@liveqing/liveplayer'

export default {
    props:['videoUrl','visible'],
    data(){
      return{
      
        myvisible:false
      }
    },
     components: {
    LivePlayer
  },

watch:{
  deep: true,
	immediate: true,
  visible(n,o){
     let that=this
     that.myvisible=n
  }
},
 methods:{
       // 取消填写表单
    handleCancel(){
       this.myvisible=false
    },
  //  确认表单
    handleCreate(){
      this.myvisible=false
      console.log("ok")
  },
 },
}
</script>