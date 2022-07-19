import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../views/products/Products.vue";
import ProductPage from "../views/products/ProductPage.vue";
import ProductsLayout from "../views/products/ProductsLayout.vue";
import ProductDetails from "../views/products/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/products",
    component: HomeView,
  },
  {
    path: "/products",
    name: "ProductsLayout",
    component: ProductsLayout,
    children: [
      {
        path: "",
        name: "AllProducts",
        component: Products,
      },
      {
        path: "/products/:id",
        name: "Product Page",
        component: ProductPage,
      },
      {
        path: "/products/:id/:details",
        name: "Product Details",
        component: ProductDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
