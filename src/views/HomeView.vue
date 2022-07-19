<template>
  <div class="mica-muscovite min-h-[100vh]">Home</div>
</template>

<script>
// @ is an alias to /src
import { allProducts as dummyData } from "@/utils/dums.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
// import Carousel from "@/components/Carousel/CarouselWrap.vue";
// import CarouselSlide from "@/components/Carousel/CarouselSlide.vue";

export default {
  name: "HomeView",
  components: {
    // Carousel,
    // CarouselSlide,
  },
  setup() {
    const router = useRouter();
    const allProductsData = ref(dummyData);
    const viewList = (id) => {
      router.push({ name: "Product Page", params: { id: id } });
    };
    const getBannerUrl = (productIndex, imgIndex) => {
      const allBanners = allProductsData.value;
      const productBannerUrls = allBanners[productIndex].slideshow[imgIndex];
      return productBannerUrls;
    };
    return {
      viewList,
      allProductsData,
      // allBanners,
      getBannerUrl,
    };
  },
};
</script>
