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
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
