<template>
  <layout-comp @openCurrConvertForm="openCurrConvertForm()">
    <router-view />
  </layout-comp>
</template>
<script>
import LayoutComp from "@/components/Layouts/LayoutComp.vue";
export default {
  name: "App",
  methods: {
    openCurrConvertForm() {
      console.log("hn ooo");
      this.$router.push({ path: "/currency-convert" });
    },
  },
  components: { LayoutComp },
};
</script>
<style lang="scss">
.v-rating__wrapper {
  margin-right: 5px;
}
</style>
