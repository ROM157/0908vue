<template>
  <div class="home">
    <lunbo />
    <cardtab />
    <favourites />
    <cardtab />
    <imglist />
    <evaluate />
  </div>
</template>

<script>
// @ is an alias to /src
import lunbo from "@/pages/swiper/lunbo.vue";
import cardtab from "@/pages/cardtab/index.vue";
import favourites from "@/pages/favourites/index.vue";
import imglist from "@/pages/imglist/index.vue";
import evaluate from "@/pages/evaluate/index.vue";

export default {
  components: {
    lunbo,
    cardtab,
    favourites,
    imglist,
    evaluate
  }
};
</script>
<style lang="scss">
  .home{
      width: 100%;
      height: auto;
  }
</style>