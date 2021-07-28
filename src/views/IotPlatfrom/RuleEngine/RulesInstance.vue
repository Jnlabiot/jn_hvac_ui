<template>
    <!-- 规则实例 -->
    <div>
        <Breadcrum :home="ruleheader"/>
        <NewRules/>
        <!-- <Ruleheader :home="ruleheader"/> -->
        <RulesList :rulelist="rulelist"/>
    </div>
</template>
<script>
import NewRules from '../../../components/IotPlatfrom/RuleEngine/NewRules'
import RulesList from '../../../components/IotPlatfrom/RuleEngine/RulesList'
import Breadcrum from '../../../components/IotPlatfrom/commont/Breadcrumb'
import axios from 'axios'
export default {
    components:{
       RulesList,
       Breadcrum,
       NewRules
    },
    data(){
        return{
            mypath:"",
            rulelist:[],
            timer:null,
            ruleheader:{
                path:"/IotPlatfrom/Buding",
                title:"规则引擎",
                secondtitle:"规则实例"
            }
        }
    },
     beforeDestroy(){
    clearTimeout(this.timer)
  },

  created(){
     this.mytimer()
  },
    methods:{
             mytimer(){
       let this_ = this
       this_.timer = setInterval(function getdata() {
        
         this_.mypath = window.g.rules_list
        axios.get( this_.mypath,{
            headers:{
          Authorization:localStorage.getItem('Authorization')
      }
         })
         .then(response =>{
          if(response.data.message===44||response.data.message===40){
               this_.$message.error("权限认证失效，请重新登录")
                this_.$router.push('/Login');
          }
         this_.rulelist=response.data.data
      
         })
      },2000)
    }
    },
}
</script>