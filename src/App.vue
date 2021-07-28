<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
html,body,#app{
        width: 100%;
        height: 100%;
    }
</style>
<script>
import  { createSocket } from './utils/websocket.js'
import Mqtt from './utils/mqtt.js'
export default {
   data(){
   return{
       client:{},
       client2:{},
       client3:{},
       client4:{},
       ws1_path:"",
       ws2_path:"",
       //课室3d温度场数据
       message:null,
        //帐篷3d温度场数据
       messageTent:null,
        path:"",
        data:
            {
            },
       
   }
 },
 created(){
    this.path = window.g.tent_sensor
    this.ws1_path = window.g.websocket_1
  
  
 },
 mounted(){
   this.initmqtt()
     this.initmqtt2()
     this.initmqtt3()
      this.initmqtt4()
    createSocket({
      url:this.path,
      message:"onmessageWS"
    })//传感器数据
  
    window.addEventListener('onmessageWS', this.getsocketData)
    

 },
 beforeDestroy(){
   this.client.close()
   this.client2.close()
   this.client3.close()
     this.client4.close()
    // 在需要的时候卸载监听事件，比如离开页面
    window.removeEventListener('onmessageWS', this.getsocketData)

 },
 methods:{
  //  课室温度场
   initmqtt(){
     let this_1 = this
      this.client = new Mqtt({
        username:window.g.username,
        password:window.g.password,
      url:window.g.url,  
      theme: window.g.theme,
      handleData: (res, topic) => {
        // 接收到的消息体 res
        // 订阅的主题 topic
       this_1.message=JSON.parse(res)
         this_1.$store.commit('changescatter3d', this_1.message);
      //  console.log(JSON.parse(res))
      }
    })
    this.client.link()
   },
   //帐篷温度场
     initmqtt2(){
     let this_1 = this
      this.client2 = new Mqtt({
        username:window.g.username,
        password:window.g.password,
      url:window.g.url,  
      theme: window.g.theme_tent,
      handleData: (res, topic) => {
        // 接收到的消息体 res
        // 订阅的主题 topic
       this_1.messageTent=JSON.parse(res)
         this_1.$store.commit('changescatter3dTent', this_1.messageTent);
        //console.log(JSON.parse(res))
      }
    })
    this.client2.link()
   },
      //帐篷温度场
     initmqtt3(){
     let this_1 = this
      this.client3 = new Mqtt({
        username:window.g.username,
        password:window.g.password,
      url:window.g.url,  
      theme: window.g.theme_classroom_live_20x,
      handleData: (res, topic) => {
        // 接收到的消息体 res
        // 订阅的主题 topic
       this_1.messageTent=JSON.parse(res)
         this_1.$store.commit('changeclassroomlive_20x', this_1.messageTent);
        //console.log(JSON.parse(res))
        this_1.$store.commit('changeclassroomlive_205', this_1.messageTent);
      }
    })
    this.client3.link()
   },
   //北主楼
        initmqtt4(){
     let this_1 = this
      this.client4 = new Mqtt({
        username:window.g.username,
        password:window.g.password,
      url:window.g.url,  
      theme: window.g.theme_beizhulou_all,
      handleData: (res, topic) => {
        // 接收到的消息体 res
        // 订阅的主题 topic
       this_1.messageTent=JSON.parse(res)
       //  this_1.$store.commit('changeclassroomlive_20x', this_1.messageTent);
        //console.log(JSON.parse(res))
        this_1.$store.commit('changebeizhulou_buding', this_1.messageTent);
      }
    })
    this.client4.link()
   },
  //传感器数据
   getsocketData(e){
       let mydata= e && e.detail.data
       this.data=JSON.parse(mydata)
      console.log(this.data)
       if(this.data.hardwareid===888){
         this.$store.commit('changetentsensor',  this.data);
        //  console.log("现场传感器",this.data)
       }else if(this.data.hardwareid===111){
          this.$store.commit('changetentpower',  this.data);
          //  console.log("电表",this.data)
       }
          
    },

 }
}
</script>
