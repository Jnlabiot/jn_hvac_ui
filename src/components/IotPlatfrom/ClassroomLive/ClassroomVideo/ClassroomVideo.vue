<template>
     <div class="classroom_video" style="position: relative">
          <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch aspect='fullscreen' ></LivePlayer>
           <!-- <LivePlayer :videoUrl="videoUrl" @snapOutside="snapOutside" ref="player2"   aspect='fullscreen' live /> -->
     </div>
</template>
<style src="./ClassroomVideo.css" scoped>

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
            videoUrl:window.g.classroom_videoUrl,
            path:"",
            socket:"",
            imgdata:"",
            path:"",
            ws_title1:"",
            number:0,
        }
    },
   beforeCreate(){

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