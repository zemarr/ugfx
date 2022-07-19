<template>
  <ol
    vocab="http://schema.org/"
    typeof="BreadcrumbList"
    class="flex items-center"
  >
    <li
      property="itemListElement"
      typeof="ListItem"
      class="!text-[14px] !leading-[20px] !not-italic"
    >
      <router-link property="item" typeof="WebPage" to="/" class="!capitalize">
        <span property="name">Home</span>
      </router-link>
      <meta property="position" content="1" />
    </li>
    <li
      v-for="(crumb, index) in crumbs()"
      :key="index"
      property="itemListElement"
      typeof="ListItem"
      class="flex items-center !text-[14px] !leading-[20px] !not-italic !capitalize max-w-[200px] sm:max-w-[max-content] overflow-hidden whitespace-nowrap"
    >
      <span class="block mx-2">
        <svg
          width="5"
          height="10"
          viewBox="0 0 5 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66665 5.00047C4.66695 5.15624 4.6127 5.30719 4.51331 5.42713L1.17998 9.42713C1.06682 9.56328 0.904214 9.64889 0.72793 9.66515C0.551645 9.6814 0.376125 9.62696 0.23998 9.5138C0.103836 9.40064 0.0182197 9.23803 0.00196655 9.06175C-0.0142866 8.88547 0.0401544 8.70995 0.153313 8.5738L3.13998 5.00047L0.259981 1.42713C0.204604 1.35894 0.163249 1.28048 0.138295 1.19625C0.11334 1.11203 0.105278 1.0237 0.11457 0.936346C0.123863 0.848993 0.150328 0.764338 0.192444 0.687247C0.23456 0.610156 0.291496 0.542149 0.359981 0.487133C0.428528 0.42608 0.508946 0.379841 0.596195 0.351313C0.683444 0.322784 0.775645 0.312582 0.86702 0.321344C0.958396 0.330106 1.04698 0.357643 1.12721 0.402232C1.20745 0.446821 1.27762 0.507501 1.33331 0.580467L4.55331 4.58047C4.63699 4.70386 4.67689 4.85173 4.66665 5.00047Z"
            fill="#0A0B0A"
          />
        </svg>
      </span>
      <router-link
        property="item"
        typeof="WebPage"
        :to="crumb.params.id"
        class="!capitalize"
      >
        <span property="name">{{
          fullPath === crumb.path && title !== null ? title : crumb.title
        }}</span>
      </router-link>
      <meta property="position" :content="index + 2" />
    </li>
  </ol>
</template>

<script>
import { useRouter } from "vue-router";

// const titleCase = require("ap-style-title-case");
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  setup() {
    const router = useRouter();
    const fullPath = router.currentRoute.value.fullPath;

    const crumbs = () => {
      const params = fullPath.startsWith("/")
        ? fullPath.substring(1).split("/")
        : fullPath.split("/");
      const crumbs = [];
      let path = "";
      // eslint-disable-next-line no-unused-vars
      params.forEach((param, index) => {
        path = `${path}/${param}`;
        const match = router.resolve({
          params: { id: path },
        });
        if (match !== null) {
          crumbs.push({
            title: param.replace("%20", " "),
            ...match,
          });
        }
      });
      // console.log(crumbs, "crumbsss");
      return crumbs;
    };
    return {
      fullPath,
      crumbs,
    };
  },
};
</script>

<style></style>
