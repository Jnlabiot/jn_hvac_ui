<template>
    <div class="live_left_top" style="position: relative"> 
  <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch aspect='fullscreen' ></LivePlayer>
   </div>
</template>
<style src="./Video.css" scoped>

</style>
<script>
import LivePlayer from '@liveqing/liveplayer'
export default {
    name:"ClassroomVideo",
        components:{
      LivePlayer
    },
     data () {
        return {
           videoUrl:window.g.live_videoUrl,
            path:"",
            socket:"",
            imgdata:"",
            path:"",
            ws_title1:"",
            number:0
        }
    },
 created() {
       this.path = window.g.big_top
     
    },
    destroyed() {
    
    },
    methods: {
               pause: function () {
            this.$refs.player2.pause();
        },
        play: function () {
            this.$refs.player2.play();
        },
        snap: function () {
            this.$refs.player2.snap();
        },
        snapOutside: function (snapData) {
            alert(snapData)
        }
    },
}
</script>