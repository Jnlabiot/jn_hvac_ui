<template>
 <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
<div  style="background-color: #ececec;width:100%;height:100% padding: 20px;">
  <a-list :pagination="pagination" position="bottom"  :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item, index">

      <a-card hoverable style="width: 5rem ;">
    <template slot="actions" class="ant-card-actions">
       <a-tooltip placement="topLeft" title="修改规则" arrow-point-at-center>
      <a-icon  @click="()=>reviserules(item)" key="setting" type="setting" />
        </a-tooltip>
      <a-tooltip placement="topLeft" title="执行规则" arrow-point-at-center>
      <a-icon  @click="()=>mypublish(item)" key="edit" type="edit" />
        </a-tooltip>

         <a-tooltip placement="topLeft" title="删除规则" arrow-point-at-center>
      <a-icon  @click="()=>mydelete(item)" key="delete" type="delete" />
        </a-tooltip>
    </template>
    <a-card-meta :title="item.behaviour" :description="item.id">
      <a-avatar
      slot="avatar"
        style="backgroundColor:#87d068" icon="user"
      />
    </a-card-meta>
     <a-row>
      <a-col :span="4" >
       主题
      </a-col>
      <a-col :span="4" :offset="4">
       硬件id
      </a-col>
        <a-col :span="4" :offset="8">
       msg
      </a-col>
    </a-row>
       <a-row>
      <a-col :span="4" >
        {{item.topics}}
      </a-col>
      <a-col :span="4" :offset="4">
        {{item.hardwareid}}
      </a-col>
         <a-col :span="4" :offset="8">
       {{item.msg}}
      </a-col>
      <br>
    </a-row>
  </a-card>
    </a-list-item>
     
  </a-list>
  <Mypublish :myvisible="visible" :item="item"/>
  <Deletemyrules :visible2="visible2" :item="item"/>
  <ReviseRules :myvisible2="visible3" :item2="item"/>
 </div>
 </a-spin>
</template>
<script>

import Deletemyrules from './Deletemyrules'
import Mypublish from './Mypublish'
import ReviseRules from './ReviseRules'
export default {
  props:['rulelist'],
  components:{
     Mypublish,
     Deletemyrules,
     ReviseRules
  },
  data() {
    return {
       spinning:false,
        item:{},
        current:1,
        visible:false,
        visible2:false,
        visible3:false,
        data:[],
        pagination: {
            onChange: page => {
            console.log(page);
            this.current=page
            },
            pageSize: 12,
           
        },
    }
  },
created(){
  this.spinning=true
},

  watch:{
      rulelist(n,o){
      //遍历数组

      let this_1=this
      this.spinning=false
     this.data= n.map(item=>{
       return{
             behaviour: item.behaviour,
            hardwareid: item.hardwareid,
            id: item.id.toString(),
            msg:item.msg.substring(0, 4)+"...",//截断消息字符串，不然会溢出，影响布局
            topics:item.topics
       }
     })
   
      
    }
  },
  methods:{
    mypublish(item){
      let this_ = this
        this_.item = item
      this_.visible=!this_.visible
    },
      mydelete(item){
       let this_=this
       this_.item = item
       this_.visible2= !this_.visible2
  },
  reviserules(item){
    let this_=this
    this_.item=item
    this_.visible3=!this_.visible3
    console.log("修改规则",item)
  }
  },

};
</script>
<style>
.ant-list{
  padding:20px;
}
</style>