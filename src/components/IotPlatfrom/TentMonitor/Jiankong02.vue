<template>
   <div class="tent_jiankong">
            <h1>{{ws_title2}}</h1>
            <div class="jiankong_2">
                <img v-bind:src="imgdata" alt="">
            </div>
        </div>
</template>
<style src="./Jiankong02.css" scoped>

</style>
<script>
export default {
     name:"Jiankong02",
       data () {
        return {
            path:"ws://localhost:5000",
            socket:"",
            imgdata:"",
            path:"",
            ws_title2:"",
        }
    },
 created() {
        this.ws_title2 = window.g.ws_title2
       this.ws2_path = window.g.websocket_2
      this.initWebSocket();
    },
    destroyed() {
      this.websock.close();//离开路由之后断开websocket连接
    },
    methods: {
      initWebSocket(){//初始化weosocket(必须)
        const wsuri = "后台给你的请求地址";    //请根据实际项目需要进行修改
        this.websock = new WebSocket( this.ws2_path);      //新建一个webstock对象
        this.websock.onmessage = this.websocketonmessage;  
        this.websock.onopen = this.websocketonopen;      
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
      },
      websocketonerror(){//连接建立失败重连
        this.initWebSocket();
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