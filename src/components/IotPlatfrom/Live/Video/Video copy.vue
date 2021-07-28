<template>
    <div class="live_left_top"> 
 <img style="display:block;width:100%;height:100%;" v-bind:src="imgdata"   alt="视频加载失败">
   </div>
</template>
<style src="./Video.css" scoped>

</style>
<script>
export default {
    name:"ClassroomVideo",
     data () {
        return {
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

    },
}
</script>