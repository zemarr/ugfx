<template>
  <div class="mica-muscovite min-h-[100vh]">
    <div class="relative max-w-[1220px] mx-auto mb-[48px] px-[20px] py-16">
      <!-- <BreadCrumb /> -->
      <div class="head flex flex-col justify-between w-full py-3 mb-16">
        <h1
          class="font-medium text-[50px] leading-[70px] !font-Poppins mb-4 tracking-[-2.5px]"
        >
          MUSCOVITE MICA IN NIGERIA.
        </h1>
        <p
          class="!font-Poppins text-[18px] leading-[30px] font-normal tracking-[-0.6px]"
        >
          Mica is found in various parts of the Nigeria, with the major
          muscovite mica mineral deposits largely found in the Northern part of
          Nigeria, with reasonable deposits in some parts of the Western parts
          of Nigeria in places like Ibadan.<br /><br />
          We represent an array of miners in both parts of Nigeria.
        </p>
      </div>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[19px]"
      >
        <router-link
          v-for="(product, i) in allProducts"
          :key="i"
          :to="'/products/' + product.slug"
          class="product-thumb cursor-pointer flex flex-col rounded-[8px] overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all duration-500 p-[12px]"
        >
          <div
            class="thumbImg max-h-[330px] min-h-[250px] h-full w-full mb-3 rounded-[4px] overflow-hidden flex items-start justify-start"
          >
            <!-- <img
              :src="getBannerUrl(product.featured_media)"
              :alt="product.featured_media"
              class="w-full h-auto"
            /> -->
            <Carousel v-slot="{ currentSlide }">
              <CarouselSlide
                v-for="(slide, index) in allProducts[i].slideshow"
                :key="slide"
              >
                <!-- {{ currentSlide }} -->
                <div
                  v-show="currentSlide === index + 1"
                  class="info absolute max-h-full h-screen w-full top-0 left-0"
                >
                  <img :src="slide" alt="" class="w-full h-full object-cover" />
                </div>
              </CarouselSlide>
            </Carousel>
          </div>
          <div class="flex items-center mb-[6px]">
            <span
              class="font-Rubik sm:text-[14px] text-[12px] sm:leading-[20px] leading-[16px] text-greyText"
            >
              <!-- {{
                product.categories.includes(3)
                  ? "NEWS"
                  : product.categories.includes(7)
                  ? "ART"
                  : product.categories.includes(6)
                  ? "BOOKS"
                  : product.categories.includes(4)
                  ? "BUSINESS"
                  : product.categories.includes(5)
                  ? "PROFILES"
                  : product.categories.includes(1)
                  ? "UNCATEGORIZED"
                  : null
              }} -->
            </span>
            <!-- <svg
              class="mx-[6px]"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#A3A3A3" />
            </svg> -->
            <!-- <span
              class="font-Rubik sm:text-[14px] text-[10px] sm:leading-[20px] leading-[16px] text-greyText"
              >{{ product.date.slice(0, 10) }}</span 
            > -->
          </div>
          <div class="pb-[12px]">
            <h4
              class="font-Poppins font-semibold sm:text-[24px] text-[16px] sm:leading-[28px] leading-[20px] mb-3"
            >
              {{ product.productName }}
            </h4>
            <p class="font-Poppins font-normal text-[15px] leading-[20px]">
              {{ product.short_description }} ...
              <span class="underline text-[13px] font-medium">read more</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import { allProducts as dummyData } from "@/utils/dums.js";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Carousel from "@/components/Carousel/CarouselWrap.vue";
import CarouselSlide from "@/components/Carousel/CarouselSlide.vue";
// import BreadCrumb from "@/components/BreadCrumb.vue";
import { useStore } from "vuex";

export default {
  name: "AllProducts",
  components: {
    Carousel,
    CarouselSlide,
    // BreadCrumb,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const allProducts = computed(() => store.state.products);

    const getCurrentRouteSlug = router.currentRoute.value.fullPath;
    console.log(getCurrentRouteSlug);
    // const viewList = (id) => {
    //   router.push({ name: "Product Page", params: { id: id } });
    // };
    const getBannerUrl = (productIndex, imgIndex) => {
      const allBanners = allProducts;
      const productBannerUrls = allBanners[productIndex].slideshow[imgIndex];
      return productBannerUrls;
    };
    return {
      // viewList,
      // allBanners,
      getBannerUrl,
      allProducts,
    };
  },
};
</script>

<style></style>
