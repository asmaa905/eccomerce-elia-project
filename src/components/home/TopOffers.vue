<template>
  <div class="top-offers bg-grey-lighten-4 py-9">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent pr-2" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/playstations.webp"
                :style="`width: 100%;transition: 0.7s all ease-in-out;curser: pointer; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent pr-2" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/headset.webp"
                :style="`width: 100%;transition: 0.7s all ease-in-out;curser: pointer; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent pr-2" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/chairs.webp"
                :style="`width: 100%;transition: 0.7s all ease-in-out;curser: pointer; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent pr-2" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/iphones.webp"
                :style="`width: 100%;transition: 0.7s all ease-in-out;curser: pointer; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div class="parent pr-2" v-bind="props" style="overflow: hidden">
              <img
                src="@/assets/images/laptops.webp"
                :style="`width: 100%;transition: 0.7s all ease-in-out;curser: pointer; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
