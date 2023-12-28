<template>
  <v-navigation-drawer temporary location="left">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint
      corrupti q uasi aliquam aut quas optio, voluptate s officia explicabo
      molestiae nam moll itia fugit possimus accusantium esse d ebitis odio
      veritatis dolore.
    </p>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "cart-drawer",
  data() {
    return {};
  },
  computed: {
    ddrawer: {
      set(val) {
        this.$emit("update:drawer", val);
      },
      get() {
        return this.drawer;
      },
    },
  },
  props: {
    drawer: { default: false },
  },
};
</script>

<style></style>
