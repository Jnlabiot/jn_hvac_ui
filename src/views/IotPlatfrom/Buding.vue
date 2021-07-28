<template>
   <div class="schoolroom">
         <div class="school_contain">
             <div class="buding_title"><h1 style="font-size:.46875rem;">基于中央空调多模态能效数据融合的节能控制系统</h1></div>
            <img width="100%" style="display: inline-block;" src="../../assets/buding/北主楼.jpg" alt="" srcset="">
            <Left/>
            <Center/>
            <Right/>
            
      </div>
</div>


</template>
<style scoped>

/* 标题 */
.buding_title{
    display: inline-block;
    position: absolute;
    width: 10.9375rem;
    top: .78125rem;
    left: 4.1625rem;
    transform: scale(0.6);
    text-align: center;
   border: 2px solid;
   background-color: #fff;
   
}

/* 背景 */
.schoolroom{
     height: 100%;
   width: 100%;
   background-color: #fff;
}
/* 布局大小 */
.school_contain{
    margin: 0 auto;
    position: relative;
      width: 19.2rem;
   
}

</style>
<script>
// import Left from '../components/Buding/Left/Left.vue'
import Left from '../../components/IotPlatfrom/Buding/Left/Left'
import Right from '../../components/IotPlatfrom/Buding/Right/Right'
import Center from '../../components/IotPlatfrom/Buding/Center/Center'





export default {
     name:"Buding",
     components:{
       Left,
       Center,
       Right
     
        
     },
    
}
</script>
