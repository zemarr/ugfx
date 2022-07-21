<template>
  <div
    class="carousel-wrap relative w-full h-full overflow-hidden"
    ref="carouselRef"
  >
    <slot :currentSlide="currentSlide"></slot>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "CarouselWrap",
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const changeSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = currentSlide.value / currentSlide.value;
        return;
      }
      currentSlide.value += 1;
    };
    const autoPlay = () => {
      setInterval(() => {
        changeSlide();
      }, 3000);
    };
    const carouselRef = ref([]);

    onMounted(() => {
      getSlideCount.value = carouselRef.value.children.length;
      autoPlay();
    });

    return {
      currentSlide,
      getSlideCount,
      carouselRef,
    };
  },
};
</script>
<style></style>
