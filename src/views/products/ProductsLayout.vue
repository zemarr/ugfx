<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ProductsLayout",
  setup() {
    const router = useRouter();
    const viewList = (id) => {
      router.push({ name: "Product Page", params: { id: id } });
    };
    return {
      viewList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
