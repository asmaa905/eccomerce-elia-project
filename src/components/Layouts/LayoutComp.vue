<template>
  <v-layout>
    <cart-drawer :drawer="drawer" />
    <nav-bar
      @show-drawer="drawer = true"
      @openCurrConvertForm="$emit('openCurrConvertForm')"
    ></nav-bar>
    <fixed-nav></fixed-nav>

    <v-main style="padding-top: 160px">
      <slot></slot>
    </v-main>

    <footer-comp />
    <v-overlay :value="drawer" @click="drawer = false"></v-overlay>
  </v-layout>
</template>

<script>
import CartDrawer from "./cartDrawer.vue";
import FixedNav from "./FixedNav.vue";
import FooterComp from "./footerComp.vue";
import navBar from "./navBar.vue";
export default {
  name: "app-layout",
  data() {
    return {
      drawer: false,
    };
  },
  components: { FixedNav, navBar, FooterComp, CartDrawer },
};
</script>

<style></style>
