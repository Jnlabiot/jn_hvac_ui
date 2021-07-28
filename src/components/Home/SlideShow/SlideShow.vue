
      <!-- <div><img style="width:1700px;text-align:center" class="imgposition" src="../../../assets/SlideShow/展示.png"/></div>
    <div><img   style="width:1700px;text-align:center" class="imgposition" src="../../../assets/SlideShow/怎么做1.png"/></div>
    <div><img   style="width:1700px;text-align:center" class="imgposition" src="../../../assets/SlideShow/怎么做2.png"/></div>
    <div><img   style="width:1700px;text-align:center" class="imgposition" src="../../../assets/SlideShow/怎么做3.png"/></div>
    -->

<template>
  <a-carousel autoplay>
    <div><img  class="imgposition" src="../../../assets/SlideShow/1.png"/></div>
        <!-- <div><img  class="imgposition" src="../../../assets/SlideShow/怎么做1.png"/></div> -->
        <div><img  class="imgposition" src="../../../assets/SlideShow/怎么做2.png"/></div>
        <div><img  class="imgposition" src="../../../assets/SlideShow/怎么做3.png"/></div>
  </a-carousel>
</template>
<script>
export default {};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 900px;
  line-height: 160px;
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>