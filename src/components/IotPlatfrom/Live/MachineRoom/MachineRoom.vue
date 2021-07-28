<template>
         <div  class="live_right_bottom">
                      <img style="width: 100%;" src="../../../../assets/live/最新.png" alt="" srcset="">
                        
                        <div class="shuiwen">
                        <div class="shuiwen1">
                          <h3>水温1</h3>
                          <h3>{{machine.cTIWTem}}</h3>
                        </div>

                          <div class="shuiwen2">
                          <h3>水温2</h3>
                          <h3>{{machine.cTOWTem}}</h3>
                        </div>

                          <!-- <div class="shuiwen3">
                          <h3>水温3</h3>
                          <h3>3</h3>
                        </div> -->

                          <!-- <div class="shuiwen4">
                          <h3>水温4</h3>
                          <h3>4</h3>
                        </div> -->

                          <div class="shuiwen5">
                          <h3>水温5</h3>
                          <h3>{{machine.fIWTem}}</h3>
                        </div>

                        <div class="shuiwen6">
                          <h3>水温6</h3>
                          <h3>{{machine.fOwTem}}</h3>
                        </div>
                        </div>
                         
                      <div class="suanfa">
                        <div class="suanfa_MAE"><h3 style="display: inline-block;">算法实时MAE:</h3>
                            <h3 style="display: inline-block;margin-left: .125rem;">33333</h3>
                        </div>
                           <div class="suanfa_EER">
                               <h3 style="display: inline-block;">EER:</h3>
                               <h3 style="display: inline-block;margin-left: .125rem;">22222</h3>
                        </div>
                      </div>
           
                </div>
</template>
<style src="./MachineRoom.css" scoped>

</style>
<script>
export default {
  data(){
    return{
        machine:{
          cTIWTem: "36.0",
          cTOWTem: "36.0",
          co2: "488",
          fIWTem: "36.0",
          fOwTem: "36.0",
          hardwareid: 888,
          humidity: "32.5",
          id: "49830376-6e41-450d-9bcb-bcf13ab7c4f1",
          temperature: "27.5",
          time: 1621859283,
          waterSpeed: "7.2",
        }
    }
  },
  computed:{
    datasenser(){
      return this.$store.state.tentsensor
    },
  },
watch:{
    deep: true,
	immediate: true,
    datasenser(n,o){
         let this_1=this
         this_1.machine=n
        console.log("machineroom11",n)
    }
},
}
</script>