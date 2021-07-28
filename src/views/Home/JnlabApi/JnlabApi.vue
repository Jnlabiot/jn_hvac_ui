<template>
  <div>
        <div class="img_contain">
            <img style="width:100%;height:100%" src="../../../assets/jnapi/展示.png" alt="">
        </div>
        <!-- 介绍1 -->
        <div class="introduce">
            <h1 style="text-align: center;padding: 40px 0;color: #444444;  font-size:2em; ">实时温度场分析</h1>
            <h2 style="width: 8.75rem;padding: 50px 0;margin: 0 auto;color:#444444">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;匠能科技，致力于打造：更舒适，更节能，
                易部署的中央空调节能系统，提供实时温度场分析，在提高人体舒适度的同时，降低空调能耗。</h2>
        </div>
        <div class="img_contain">
            <img style="width:100%;height:100%" src="../../../assets/jnapi/温度场.png" alt="">
        </div>
        <!-- 介绍2 -->
        <div class="introduce">
            <h1 style="text-align: center;padding: 40px 0;color: #444444; font-size:2em; ">实时空调运行数据</h1>
            <h2 style="width: 8.75rem;padding: 50px 0;margin: 0 auto;color:#444444">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;匠能科技，致力于打造：更舒适，更节能，
                易部署的中央空调节能系统，提供大量实时空调数据，助力暖通行业的发展。</h2>
        </div>
        <div class="img_contain">
            <img style="width:100%;height:100%" src="../../../assets/jnapi/空调数据.png" alt="">
        </div>
        <div><a style="display:block;text-align:center;font-size:30px" :href="jnlabapi">立即使用匠能API</a></div>
    </div>
</template>
<style scoped>
.img_contain{
    width: 100%;
    height: 100%;
}
.introduce{
    width: 100%;
    
    background-color: #F8F8F8;
}
</style>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      jnlabapi:""
    };
  },
  created(){
      this.jnlabapi=window.g.swagger_url
  }
};
</script>