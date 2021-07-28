<template>
<div>
   <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
  <a-table :pagination="pagination"  :columns="columns" :data-source="data">
    <a  slot-scope="text">{{ text }}</a>
    <span slot="customTitle">ID</span>
    <span slot="action" slot-scope="text, record">
      <!-- <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" /> -->
      <a @click="()=>edit(record)" class="ant-dropdown-link">播放 </a>
        <a-divider type="vertical" />
      <a @click="()=>recover(record)" class="ant-dropdown-link">修改</a>
        <a-divider type="vertical" />
       <a @click="()=>deletedevices(record)" class="ant-dropdown-link">删除</a>
    </span>
  </a-table>
         <a-modal
 :visible="visible"
 title="视频流播放"
 @cancel="handleCancel"
  @create="handleCreate">
    <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch></LivePlayer>
</a-modal>
   </a-spin>
</div>

</template>

<script>

const columns = [
      {
    title: '名称',
    dataIndex: 'myname',
    key: 'myname',
  },
   {
    title: '服务器地址',
    dataIndex: 'myip',
    key: 'myip',
  },
 {
    title: '端口号',
    dataIndex: 'myport',
    key: 'myport',
  },
  {
    title: 'AppName',
    dataIndex: 'myappname',
    key: 'myappname',
  },
    {
    title: '串流密钥',
    dataIndex: 'mymishi',
    key: 'mymishi',
  },
  {
    title: '播放格式',
    dataIndex: 'mytype',
    key: 'mytype',
   
  },
    {
    title: '时间',
    dataIndex: 'mytime',
    key: 'mytime',
  },

  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

// let data = [
//   {
//     key: '1',
//     myip: '172.22.12.6',
//     myport: "3001",
//     passid: '34020000001320000001',
//      mytype: 'https-flv',
//     mytime:"2021-04-10",
    
//   },

// ];
    // let listobject={
    //         key: "",
    //         id: "",
    //         name: "",
    //         time: 0,
    //         state: true,
    //       }

import  axios from 'axios'
import LivePlayer from '@liveqing/liveplayer'
export default {
 
  name:"ConmonList",
   props:['list'],
  data() {
    return {
       videoUrl:"http://zhangdengzhen.top:3013/live/stream.flv",
        visible:false,
      pagination:{
       pageSize:7
      },

      mypath:"",
      spinning:false,
      data:[
           {
    key: '1',
      myname: '室内测试',
    myip: '172.22.12.6',
    myport: "3001",
    myappname:"live",
    mymishi:"stream",
     mytype: 'https-flv',
    mytime:"2021-04-10",
    
  },
      ],
      columns,
       mykey:1,
      
    };
  },
beforeDestroy(){
  this.videoUrl=null
},
components:{
   LivePlayer 
},
  created(){
    this.spinning=false//加载中动画
  },
  methods:{
      edit(item){
         this.visible=true
         console.log("播放")
      },
      handleCancel(){
          this.visible=false
      },
      handleCreate(){
          this.visible=false
      }
  }
};
</script>