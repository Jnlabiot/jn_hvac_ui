<template>
<!-- 性能监控 -->
    <div class="bg">
        <div class="mymargin1"></div>
        <div class="console">
            <h1 class="consoletitle">控制台</h1>
            <div class="consoleversion">
                <h4 style="display: inline-block;">版本信息</h4><br/>
                <hr>
                <span>emqx@127.0.0.0.1</span>
            </div>

        </div>
        <div class="mymargin"></div>
         
        <div class="system_info">
         
            <h2 style="border-bottom: solid 1px; padding: 10px 0;">系统信息</h2>
            <div class="mymargin"></div>
            <div class="info_card_1">
              
                <h2 class="card_1_title" style="display: inline-block;">名称</h2>
                <span class="car_1_value" >EMQX Broker</span>
            </div>
            <div class="info_card_2">
                <h2 class="card_2_title" style="display: inline-block;">版本信息</h2>
                <span class="car_2_value" >4.2.9</span>
            </div>
        
            <div class="info_card_3">
                <h2 class="card_3_title" style="display: inline-block;">系统时间</h2>
                <span class="car_3_value" >11days,10hours,minuter,56 seconds</span>
            </div>
             <div class="info_card_4">
                <h2 class="card_4_title" style="display: inline-block;">运行时间</h2>
                <span class="car_4_value" >11days,10hours,minuter,56 seconds</span>
            </div>
        </div>
        <!-- 这个是自定义边距，把每个盒子隔离开来 -->
        <div class="mymargin"></div>

        <div class="node_information">
            <h1 style="border-bottom: solid 1px; padding: 10px 0;">节点信息</h1>
            <table class="node_table">
    
                <tr>
                    <th class="tablepadding">节点名称</th>
                    <th class="tablepadding">Erlang/TOP版本信息</th>
                    <th class="tablepadding">Erlang进程<br/>(used/available)</th>
                    <th class="tablepadding">CPU<br/>(1load/5load/15load)</th>
                    <th class="tablepadding">内存<br/>(used/total)</th>
                    <th class="tablepadding">最大文件句柄数</th>
                    <th class="tablepadding">状态</th>
                </tr>
           
                <tr>
                    <th style="padding: 5px 0;background-color:#ececec;">emqx@127.0.0.1</th>
                    <th style="padding: 5px 0;background-color:#ececec;">R22/10.7</th>
                    <th style="padding: 5px 0;background-color:#ececec;">351/2097152</th>
                    <th style="padding: 5px 0;background-color:#ececec;">0.10/0.09/0.10</th>
                    <th style="padding: 5px 0;background-color:#ececec;">85.98M/105.47M</th>
                    <th style="padding: 5px 0;background-color:#ececec;">65524</th>
                    <th style="padding: 5px 0;background-color:#ececec;">Runing</th>
                </tr>
            </table>
           
        </div>

        <div class="mymargin"></div>

        <div class="runing_statistical">
            <h1  style="border-bottom: solid 1px; padding: 10px 0;">运行统计</h1>
            <table class="runing_table">
                <tr>
                    <th class="runing_table_padding">节点名称</th>
                    <th class="runing_table_padding">连接数<br/>(count/max)</th>
                    <th class="runing_table_padding">主题数<br/>(count/max)</th>
                    <th class="runing_table_padding">保留消息数<br/>(count/max)</th>
                    <th class="runing_table_padding">会话数<br/>(count/max)</th>
                    <th class="runing_table_padding">订阅数<br/>(count/max)</th>
                    <th class="runing_table_padding">共享订阅数<br/>(count/max)</th>
                </tr>

                <tr>
                    <th style="padding: 5px 0; background-color:#ececec;">emqx@127.0.0.1</th>
                    <th style="padding: 5px 0; background-color:#ececec;">1/22</th>
                    <th style="padding: 5px 0; background-color:#ececec;">1/2</th>
                    <th style="padding: 5px 0; background-color:#ececec;">4/4</th>
                    <th style="padding: 5px 0; background-color:#ececec;">1/22</th>
                    <th style="padding: 5px 0; background-color:#ececec;">1/21</th>
                    <th style="padding: 5px 0; background-color:#ececec;">0/0</th>
                </tr>
            </table>
        </div>

    </div>
</template>
<style src="./Performance.css" scoped>

</style>
<script>
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.getdata()
    },
    methods:{
        getdata(){
            axios
     ({
          method: 'get',
              url: 'https://emqxapi.rslly.top/api/v4/clients',
              auth: {
                username: 'jnlab',
                password: 'Mjk4NzExNzIwNTczNjczODk3Nzg0ODQzNDE4NDEwMDI0OTG'
              }
            }).then(result=>{
              console.log(result);
     })
        }
    },
}
</script>