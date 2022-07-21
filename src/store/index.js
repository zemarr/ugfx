import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// import dummyData from "@/utils/dums";

export default createStore({
  state: {
    products: [],
    selectedProduct: [],
    selectedVariation: [],
  },
  getters: {},
  mutations: {
    setAllProducts(state, products) {
      state.products = products;
    },
    setSelectedProduct(state, selectedProduct) {
      state.selectedProduct = selectedProduct;
    },
    setSelectedVariation(state, selectedVariation) {
      state.selectedVariation = selectedVariation;
    },
  },
  actions: {
    setAllProducts({ commit }, products) {
      commit("setAllProducts", products);
    },
    setSelectedProduct({ commit }, selectedProduct) {
      commit("setSelectedProduct", selectedProduct);
    },
    setSelectedVariation({ commit }, setSelectedVariation) {
      commit("setSelectedVariation", setSelectedVariation);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
