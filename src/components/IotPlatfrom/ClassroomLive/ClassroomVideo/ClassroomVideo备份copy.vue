<template>
     <div class="classroom_video">
          <img style="display:block;width:100%;height:100%;" v-bind:src="imgdata"   alt="视频加载失败">
     </div>
</template>
<style src="./ClassroomVideo.css" scoped>

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
            number:0,
        }
    },
 created() {
       this.path = window.g.classroom_live
      this.initWebSocket();
    },
    destroyed() {
      this.websock.close();//离开路由之后断开websocket连接
    },
    methods: {
      initWebSocket(){//初始化weosocket(必须)
        const wsuri = "后台给你的请求地址";    //请根据实际项目需要进行修改
        this.websock = new WebSocket(this.path);      //新建一个webstock对象
        this.websock.onmessage = this.websocketonmessage;  
        this.websock.onopen = this.websocketonopen;      
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonerror(){//连接建立失败重连
              if(this.number<10){
             this.initWebSocket();
             this.number++
        }else{
          console.log("重连十次失败，不在重连")
          this.websock.close()
        }
      },
      websocketonmessage(e){ //数据接收
        this.imgdata = e.data;
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
    },
}
</script>