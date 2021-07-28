<template>
<div>
  <!-- 面包屑 -->
  <a-breadcrumb>
    <a-breadcrumb-item :href="home.path">
      <a-icon type="home" />
    </a-breadcrumb-item>
    <a-breadcrumb-item href="">
      <a-icon type="user" />
      <span>首页</span>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      {{home.title}}
    </a-breadcrumb-item>
  </a-breadcrumb>
  <h1 class="statustitle">{{home.secondtitle}}</h1>
  <!-- 分割线 -->
 <a-divider />
</div>

</template>
<style scoped>
.statustitle{
  margin-left: 50px;
}
</style>
<script>

export default {
 props:['home'],   
  name:"StatusHeader",
  components:{

  }
}
</script>