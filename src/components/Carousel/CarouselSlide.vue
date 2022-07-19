<template>
  <div class="carousel-slide w-full">
    <transition name="fade">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
// import { onMounted, ref } from "vue";

export default {
  name: "CarouselSlide",
  setup() {
    return {};
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-active {
  opacity: 1;
}
</style>
