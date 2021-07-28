<template>
    <div class="analysisbg">
        <div class="space"></div>
        <div class="line1">
            <!-- <div class="analysis_online"></div>
            <div class="analysis_message"></div>
            <div class="analysis_cpu"></div>
            <div class="analysis_jvm"></div> -->
            <Line1Online/>
            <Line1message/>
            <Line2cpu/>
            <Line2jvm/>
        </div>
        <div class="space"></div>
        <!-- <div class="line_title"></div>
        <div class="line2">
          
        </div> -->
        <Line3/>
    </div>

</template>


<style scoped src="./Analysis.css">

</style>
<script>
import Line1Online from '../../../components/IotPlatfrom/Analysis/Line1Online/Line1Online.vue'
import Line1message from '../../../components/IotPlatfrom/Analysis/Line1message/Line1message.vue'
import Line2cpu from '../../../components/IotPlatfrom/Analysis/Line2cpu/Line2cpu.vue'
import Line2jvm from '../../../components/IotPlatfrom/Analysis/Line2jvm/Line2jvm.vue'
import Line3 from '../../../components/IotPlatfrom/Analysis/Line3/Line3.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        Line1Online,
        Line1message,
        Line2cpu,
        Line2jvm,
        Line3
    }

}
</script>