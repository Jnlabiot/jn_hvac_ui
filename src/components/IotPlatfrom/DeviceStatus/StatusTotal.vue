<template>
  <div style="background-color: #ececec;padding:20px;">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="全部设备" :bordered="false">
          <p>{{mytotal.allnumber}}</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="在线" :bordered="false">
          <p>{{mytotal.online}}</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="离线" :bordered="false">
          <p>{{mytotal.off_line}}</p>
        </a-card>
      </a-col>

    </a-row>
  </div>
</template>



<script>

export default {
  props:['total'],
  name:"StatusTotal",
  data(){
    return{
       mytotal:{
           all:[],
           allnumber:0,
           online:0,
           off_line:0
         }
    }
     
  },
  components:{

  },
  watch:{
    total(n,o){
       this.mytotal.all= n.map(item=>{
         return{
            mystate:item.status.toString()
         }
       })
       //console.log(this.mytotal.all)
       this.mytotal.allnumber=this.mytotal.all.length
       let online =0
      //   console.log("数组",this.mytotal.all[0])
       for(let i=0;i<this.mytotal.all.length;i++){
         if(this.mytotal.all[i].mystate=="true"){
           online=online+1
         }

       }
       this.mytotal.online=online
       this.mytotal.off_line=this.mytotal.all.length - online
    }
  }
}
</script>
<style scoped>
.StatusTotal{
    padding: 0;
    margin: 20px 20px;
    width: 100%;
}
</style>