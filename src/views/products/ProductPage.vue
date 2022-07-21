<template>
  <div class="min-h-[100vh]">
    <div class="relative max-w-[1220px] mx-auto mb-[48px] px-[20px] py-16">
      <BreadCrumb />
      <div class="head flex flex-col justify-between w-full py-3 mb-16">
        <h1
          class="font-medium text-[50px] leading-[70px] !font-Poppins mb-4 tracking-[-2.5px]"
        >
          MUSCOVITE VARIATIONS.
        </h1>
        <p
          class="!font-Poppins text-[18px] leading-[30px] font-normal tracking-[-0.6px]"
        >
          We have high quality selected Mica in different variations.
        </p>
      </div>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[19px]"
      >
        <router-link
          v-for="(variation, i) in allProductVariations"
          :key="i"
          :to="`/products/${getCurrentRouteSlug}/` + variation.name"
          class="variation-thumb cursor-pointer flex flex-col rounded-[8px] overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all duration-500 p-[12px]"
        >
          <div
            class="thumbImg max-h-[330px] min-h-[250px] h-full w-full mb-3 rounded-[4px] overflow-hidden flex items-start justify-start"
          >
            <!-- {{ allProductVariations[0].slideshow }} -->
            <Carousel v-slot="{ currentSlide }">
              <CarouselSlide
                v-for="(slide, index) in allProductVariations[i].slideshow"
                :key="index"
              >
                <div
                  v-show="currentSlide === index + 1"
                  class="info absolute max-h-full h-screen w-full top-0 left-0"
                >
                  <img :src="slide" alt="" class="w-full h-full object-cover" />
                </div>
              </CarouselSlide>
            </Carousel>
          </div>
          <div class="flex items-center mb-[6px]"></div>
          <div class="pb-[12px]">
            <h4
              class="font-Poppins font-semibold sm:text-[24px] text-[16px] sm:leading-[28px] leading-[20px] mb-1 capitalize"
            >
              {{ getCurrentRouteSlug }} {{ variation.name }}
            </h4>
            <p class="font-Poppins font-normal text-[15px] leading-[20px]">
              View more about
              <span class="capitalize"
                >{{ getCurrentRouteSlug }} {{ variation.name }}</span
              >
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
// @ is an alias to /src
// import { allProducts as dummyData } from "@/utils/dums.js";
// import { productVariations } from "@/utils/dums.js";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Carousel from "@/components/Carousel/CarouselWrap.vue";
import CarouselSlide from "@/components/Carousel/CarouselSlide.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product Page",
  components: {
    Carousel,
    CarouselSlide,
    BreadCrumb,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    //   const allProductsData = ref(dummyData);
    const allProducts = computed(() => store.state.products);

    const currentProductData = ref([]);
    const allProductVariations = ref();

    const getCurrentRouteSlug = router.currentRoute.value.params.id;
    const getCurrentFullPath = router.currentRoute.value.fullPath;
    console.log(getCurrentFullPath);

    const getCurrentData = () => {
      return allProducts.value.filter((product) => {
        if (product.slug === getCurrentRouteSlug) {
          currentProductData.value = product;
        } else return;
      });
    };
    const currentVariationData = () => {
      allProductVariations.value = currentProductData.value.productVariations;
    };
    const getCurrentProduct = (query, slug, action) => {
      const something = query.filter((q) => q.slug === slug);
      store.dispatch(action, something[0]);
      return something;
    };
    onMounted(() => {
      getCurrentData();
      currentVariationData();
      getCurrentProduct(
        allProducts.value,
        getCurrentRouteSlug,
        "setSelectedProduct"
      );
    });
    return {
      allProducts,
      currentProductData,
      getCurrentRouteSlug,
      allProductVariations,
    };
  },
};
</script>

<style></style>
