<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col>
          <div class="parentd-flex align-center justify-center">
            <img
              style="width: 25px"
              class="mr-5"
              src="@/assets/SVGS/truck.svg"
            />
            <span>Free Shipping & Returns</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent second d-flex align-center justify-center">
            <img
              style="width: 25px"
              class="mr-5"
              src="@/assets/SVGS/guarantee.svg"
            />
            <span>Lowest Price Guarantee</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex align-center justify-center">
            <img
              style="width: 25px"
              class="mr-5"
              src="@/assets/SVGS/trophy.svg"
            />
            <span>Longest Warranties Offer</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: rgb(160, 160, 160);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: rgb(160, 160, 160);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}
</style>
