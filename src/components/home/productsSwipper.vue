<template>
  <div class="flash-deals py-16">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px" class="text-red">
        Flash Deals
      </h2>
      <a class="text-black" style="font-size: 14px" href="#">Shop All</a>
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      class="pb-9 px-5"
      :navigation="{
        prevIcon: '.swiper-prev',
        nextIcon: '.swiper-next',
      }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
              <img
                :src="
                  showenItem[item.title]
                    ? showenItem[item.title]
                    : item.thumbnail
                "
                class="w-100"
                :style="`height: 200px; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
                v-bind="props"
                :autoplay="{ delay: 3000 }"
              />
            </div>
          </v-hover>
          <v-card-text class="pl-0 pb-1">
            ({{ item.title }})
            {{
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 7).join(" ") + " ..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            class="pb-1 pl-0"
            color="yellow-darken-2"
            size="x-small"
            density="compact"
          ></v-rating>
          <v-card-text class="pl-0">
            $<del>{{ item.price }}</del> From
            <span class="text-red" style="font-weight: 900; font-size: 14px">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <v-btn-toggle class="pl-0" v-model="showenItem[item.title]">
            <v-btn
              class="mx-0"
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              rounded="xl"
              :ripple="false"
            >
              <img
                :src="pic"
                alt=""
                width="35"
                height="35"
                style="border-radius: 50%; border: 1px solid rgb(135, 135, 135)"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="compact"
              style="text-transformation: none; border: 1px solid rgb(134, 134, 134 "
              variant="outlined"
              class="py-2 px-12"
              rounded
            >
              <span>Choose Options</span>
            </v-btn>
          </div>
        </v-card>
      </swiper-slide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>

      <div class="swiper-pagination swiper-pagination-clickable"></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
export default {
  name: "products-swipper",
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: { Pagination, Navigation, Autoplay },
    };
  },
  data: () => ({
    showenItem: {},
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss">
.v-btn--size-default {
  min-width: fit-content !important;
  padding: 0 7px !important;
}
.flash-deals {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(135, 134, 134);
    border-radius: 50%;
    top: 43%;
    &::after {
      font-size: 12px;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(135, 134, 134);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }
}
</style>
