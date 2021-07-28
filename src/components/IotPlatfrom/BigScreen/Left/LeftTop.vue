<template>
  <div  class="left_top" >
                 <img style="display:block;width:100%;height:100%;" v-bind:src="imgdata"   alt="视频加载失败">
           
        </div>
</template>
<style  scoped>
.left_top{
    /* background-color: paleturquoise; */
    width: 100%;
    height: 48%;
}
</style>
<script>

export default {
     name:"LeftTop",
     data () {
        return {
            path:"",
            socket:"",
            imgdata:"",
            path:"",
            ws_title1:""
        }
    },
 created() {
       this.path = window.g.big_top
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