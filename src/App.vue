<template>
  <div class="app max-w-[1440px] mx-auto">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import { allProducts as productsData } from "@/utils/dums.js";

import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setAllProducts", productsData);
    });
  },
};
</script>

<style></style>
