<template>
<div>
   
   <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
  <a-table :pagination="pagination"  :columns="columns" :data-source="data" rowKey="myid" >
    <a  slot-scope="text">{{ text }}</a>
    <span slot="customTitle">ID</span>
      <span slot="mystate" slot-scope="mystate">
      <a-tag
        :color="mystate === '已处理' ? 'green' : 'red'"
      >
        {{mystate}}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <!-- <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" /> -->
      <a @click="()=>edit(record)" class="ant-dropdown-link">详情 </a>
       <a-divider type="vertical" />
      <a @click="()=>recover(record)" class="ant-dropdown-link">处理</a>
       <a-divider type="vertical" />
     
    </span>
  </a-table>
   </a-spin>
</div>

</template>
<script>
import SearchWaning from './SearchWaning.vue'
const columns = [
   {
    title: '设备ID',
    dataIndex: 'myid',
    key: 'myid',
  },
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
  },
      {
    title: '告警名称',
    dataIndex: 'waningname',
    key: 'waningname',
  },
  {
    title: '告警时间',
    dataIndex: 'mytime',
    key: 'mytime',
   
  },
      {
    title: '处理状态',
    dataIndex: 'mystate',
    key: 'mystate',
    scopedSlots: { customRender: 'mystate' },
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

export default {
     name:"DeviceWaning",
    data(){
        return{
             pagination:{
       pageSize:7
      },
          data:[
              {
                  myid:"test123",
                  name:"测试设备",
                  waningname:"温度过高",
                  mytime:"2021-06-02 14:02:23",
                  mystate:"已处理"
              }
          ],
          columns,
        }
    },
    components:{
        SearchWaning
    },
      created(){
    this.spinning=false
  },
    methods:{}
}
</script>