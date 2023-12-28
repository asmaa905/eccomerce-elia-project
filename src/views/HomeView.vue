<template>
  <div class="home">
    <upper-banner />
    <the-features />
    <top-offers />
    <productsSwipper :products="flashDeals" />
    <top-categories />
    <new-products :products="newProducts" />
    <quality-features />
  </div>
</template>
<script>
import UpperBanner from "@/components/home/UpperBanner.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffers from "@/components/home/TopOffers.vue";

import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import productsSwipper from "@/components/home/productsSwipper.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import NewProducts from "@/components/home/NewProducts.vue";
import qualityFeatures from "@/components/home/qualityFeatures.vue";
export default {
  name: "HomeView",
  computed: {
    ...mapState(productsModule, ["flashDeals", "newProducts"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    productsSwipper,
    TopCategories,
    NewProducts,
    qualityFeatures,
  },
};
</script>
