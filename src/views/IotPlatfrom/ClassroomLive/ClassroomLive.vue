<template>
 <div class="classroom_bg">
        <div class="classroom_title"> <h1 style="font-size: 25px;transform:scale(1);">课室情况</h1></div>
        <div class="classroom_top">
             <!-- <div class="classroom_video"></div>
             <div class="classroom_3dscatter"></div> -->
             <ClassroomVideo/>
             <Classroom3dscatter/>
        </div>
        <ClassroomBotom />
</div>
</template>
<style src="./ClassroomLive.css" scoped>

</style>
<script>
import ClassroomVideo from "../../../components/IotPlatfrom/ClassroomLive/ClassroomVideo/ClassroomVideo"
import Classroom3dscatter from "../../../components/IotPlatfrom/ClassroomLive/Classroom3dscatter/Classroom3dscatter"
import ClassroomBotom from "../../../components/IotPlatfrom/ClassroomLive/ClassroomBotom/ClassroomBotom"
export default {
    data(){
        return{
             classroomlive:{}
        }
    },
    components:{
        ClassroomVideo,
        Classroom3dscatter,
        ClassroomBotom
    },

    methods:{
        
    }
}
</script>