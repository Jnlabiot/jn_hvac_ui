<template>
    <div>
         <SlideShow/>
        <Comment/>
    </div>

</template>
<script>

import SlideShow from "../../../components/Home/SlideShow/SlideShow"
import Comment from "../../../components/Home/Comment/Comment"
export default {
     name:"Show",
     components:{
     SlideShow,
      Comment,

     },
    
}
</script>