<template>
  <div class="min-h-[100vh]">
    <div class="relative max-w-[1220px] mx-auto mb-[48px] px-[20px] py-16">
      <BreadCrumb />
      <div class="head flex flex-col justify-between w-full py-3 mb-16">
        <h1
          class="font-medium text-[50px] leading-[70px] !font-Poppins mb-4 tracking-[-2.5px] capitalize"
        >
          {{ getPreviousRouteSlug }} {{ getCurrentRouteSlug }}
        </h1>
      </div>
      <div
        class="thumbImg h-auto min-h-[250px] w-full mb-3 overflow-hidden rounded-[4px] flex items-start justify-start md:flex-row flex-col"
      >
        <!-- {{ selectedVariation }} -->
        <div
          class="left h-screen max-h-[530px] md:w-[60%] w-full md:mr-4 mr-0 mb-10 md:mb-0 overflow-hidden rounded-[4px]"
        >
          <Carousel v-slot="{ currentSlide }">
            <CarouselSlide
              v-for="(slide, index) in selectedVariation.slideshow"
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
        <div class="right md:max-w-[40%] max-w-full">
          <p class="text-[17px] font-Poppins leading-[30px] mb-4">
            {{ selectedVariation.description }}:
          </p>
          <div class="relative mb-4">
            <ul
              v-for="(standard, index) in selectedVariation.standards"
              :key="index"
              class="standards flex items-center flex-wrap w-full"
            >
              <li
                class="px-2 py-1 rounded-[4px] bg-mainBlue text-white mb-2 max-w-[max-content]"
              >
                {{ standard }}
              </li>
            </ul>
          </div>
          <div class="relative mb-4">
            <p class="mb-4 font-bold text-[19px] underline">Properties</p>
            <ul>
              <li>
                <span class="font-bold font-Graphik text-[17px]"
                  >Thickness:</span
                >
                {{ selectedVariation.properties.thickness }}
              </li>
              <li>
                <span class="font-bold font-Graphik text-[17px]"
                  >Sizes available:</span
                >
                {{ selectedVariation.properties.sizes }}
              </li>
              <li>
                <span class="font-bold font-Graphik text-[17px]">Weight:</span>
                {{ selectedVariation.properties.weight }}
              </li>
            </ul>
          </div>
          <div class="relative mb-2 font-Poppins">
            <h5 class="font-medium">
              For pre-shipment inspection, please indicate your interest.
            </h5>
          </div>
          <div class="relative mb-4 font-Poppins">
            <p class="mb-4 font-bold text-[19px]">Contact us for pricing</p>
            <button
              class="email py-2 px-3 bg-[transparent] border-[2px] border-mainBlue rounded-[4px] text-mainBlue text-[17px] block my-2 mx-2 relative pulsing"
            >
              <a href="mailto:ugraphix2001@gmail.com" class="z-[2]"
                >Send an email</a
              >
              <!-- <div
                class="fill pulsing absolute w-full top-0 left-0 h-full bg-[#1b7ad24d] transition-all duration-500 z-[1]"
              ></div> -->
            </button>
            <button
              class="call-text py-2 px-3 bg-[transparent] border-[2px] border-[#25D366] rounded-[4px] text-[#25D366] text-[17px] block my-2 mx-2 relative pulsing"
            >
              <a href="tel:+2348094709168" class="z-[2]">Phone call/WhatsApp</a>
              <!-- <div
                class="fill pulsing absolute w-full top-0 left-0 h-full bg-[#25d3652d] transition-all duration-500 z-[1]"
              ></div> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import BreadCrumb from "../../components/BreadCrumb.vue";
// import { allProducts as dummyData, productVariations } from '@/utils/dums.js';
import CarouselSlide from "@/components/Carousel/CarouselSlide.vue";
import Carousel from "@/components/Carousel/CarouselWrap.vue";
import { useStore } from "vuex";

export default {
  components: {
    BreadCrumb,
    Carousel,
    CarouselSlide,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    // const allProductsData = ref(dummyData);
    const allProducts = computed(() => store.state.products);
    const selectedProduct = computed(() => store.state.selectedProduct);
    const selectedVariation = computed(() => store.state.selectedVariation);
    const getPreviousRouteSlug = router.currentRoute.value.params.id;
    const getCurrentRouteSlug = router.currentRoute.value.params.details;
    // eslint-disable-next-line no-unused-vars
    const getCurrentFullPath = router.currentRoute.value.fullPath;

    const getCurrentVariation = (slug, action) => {
      const allVariations = selectedProduct.value.productVariations;
      const something = allVariations.filter((q) => slug.includes(q.name));
      store.dispatch(action, something[0]);
      //   console.log(something[0], "currentVariation");
      return something[0];
    };
    onMounted(() => {
      getCurrentVariation(getCurrentFullPath, "setSelectedVariation");
    });
    return {
      getCurrentRouteSlug,
      getPreviousRouteSlug,
      selectedProduct,
      selectedVariation,
      allProducts,
    };
  },
};
</script>

<style scoped>
@keyframes pulsing {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
}
@-webkit-keyframes pulsing {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.03);
  }
}
.pulsing {
  animation: pulsing 1000ms linear infinite;
}
</style>
