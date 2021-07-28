<template>
<!-- 评论 -->
<div class="comment">
       <div class="conmmentlist">
          
               <div style="width:800px;height:200px" class="list1 public_li">
              该作品的节能控制系统对于中央空调领域的发展有很大的推动意义，
              其技术在该领域是很有创新性的，对于以后作品落地有很大的帮助，在该领域可以具备很
              大的节能性能。
              目前该作品所完成的工作量很大，对以后行业的节能和温度场分析有着很好推动作用。
               </div>
               <div style="width:800px;height:400px" class="list2 public_li">
                在中央空调领域上应用该学生作品的温度场分析可以实现精准控制，
                从而提高终端的人体舒适度并且能提高节能效果。该学生所做的节能控制系统便于
                中央空调节能控制系统的节能推广，可以解决该行业中能耗大的问题，
                且该作品是组建中央空调设备生态，对以后中央空调行业的发展有很好的推动意义。
               </div>
               <!-- <li  class="list3 public_li">
                “彩云天气是在集智俱乐部读书会成功孕育的第一个项目，你我共同见证了Ta的成长，
                希望彩云天气能够乘Deep Learning的东风，破科学游戏的巨浪。”
               </li>
               <li  class="list4 public_li">
                “气象服务应该注重多元主体参与，提高社会参与。像“彩云天气”等App的发展，
                提升了气象信息覆盖率和气象服务水平，气象服务影响力也随之提高。”
               </li> -->
         
       </div>

       <div class="userphotos">
           <div class="contain1 public_user">
            <div class="photos1">
                <img class="v1" src="../../../assets/张治平.png" alt="">
                <span class="name1">张治平</span>
                <span class="work1">格立推荐信</span>
            </div>
           </div>

           <div class="contain2 public_user">
            <div class="photos2">
                <img class="v2" src="../../../assets/李继路.png" alt="">
                <span class="name2">李继路</span>
                <span class="work2">设计院推荐信</span>
            </div>
           </div>
<!--          
           <div class="contain3 public_user">
            <div class="photos3">
                <img class="v3" src="http://www.caiyun.org/imgs/avatar-jake.png" alt="">
                <span class="name3">张江</span>
                <span class="work3">北京师范大学教授</span>
            </div>
           </div>
           <div class="contain4 public_user">
            <div class="photos4">
                <img class="v4" src="http://www.caiyun.org/imgs/avatar-zzq.jpg" alt="">
                <span class="name4">张祖强</span>
                <span class="work4">中国气象局减灾与公共服务司长</span>
            </div>
           </div>
          -->

       </div>
   </div>

</template>
<style src="./Comment.css" scoped>

</style>
<script>
export default {
    data(){
        return{
            settime:null,
            i:0,
            j:1
        }
    },
    mounted(){
      this. showlist()
    },
    beforeDestroy(){
     clearInterval(this.settime)
    },
    methods:{
        showlist(){
           
    let list = document.getElementsByClassName("public_li")
    let user = document.getElementsByClassName("public_user")
    let c
    let this_1 = this
    this.settime = setInterval(function(){
        // if(j>0){
        //     let i =j-1
        //     list[i].style.display="none"
        //     user[i].style.opacity=1.0
            
        // }
        // if(j>=0&&j<2){
        //     list[j].style.display="block"
        //     user[j].style.opacity=0.5
        //     j++
        // }
        //  else{
        //     j=0
        // }
       // console.log(list)
        list[this_1.i].style.display="block"
         user[this_1.i].style.opacity=1.0
         list[this_1.j].style.display="none"
         user[this_1.j].style.opacity=0.5
         c=this_1.j
         this_1.j=this_1.i
         this_1.i=c
       
    },4000)
        }
    }
};
</script>

