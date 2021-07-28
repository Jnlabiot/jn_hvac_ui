<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
       <img class="homelogo" src="../../assets/logo.png" alt="">
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['10']"
        :style="{ lineHeight: '64px' }"
      >
           <a-menu-item key="10">
          <router-link to="/Home/Show">
             首页
             </router-link>
       
        </a-menu-item>
        <a-menu-item key="11">
          <router-link to="/Home/LabIntroduce">
            匠能实验室
             </router-link>
        </a-menu-item>
        <a-menu-item key="12">
          <router-link to="/Home/Jnlabapi">
            空调API
             </router-link>
       
        </a-menu-item>
       
        <a-menu-item key="13" >
           <router-link to="/Login">
         物联网平台
          </router-link>
        </a-menu-item>
    
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0', marginTop: '64px' }">
     
      <div :style="{ background: '#fff', padding: '0', minHeight: '380px' }">
        <!-- Content -->
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      匠能科技实验室 2021-04-19 zhangdengzhen serve
    </a-layout-footer>
  </a-layout>
</template>
<style scoped>
.homelogo{
  width: 80px;
  position: fixed;
  top: 0;
  left: 7.5rem;
}
.ant-layout-header{
  text-align: center;
}
.ant-menu{
  background-color: rgba(255, 255, 255, 0);

 
}
.slick-slider{
  text-align: center;
}
</style>

<script>

export default {
     name:"Home",
     components:{
 
     },
    
}
</script>