<template>
  <div class="top_cat">
    <div class="cyper-banner">
      <img src="@/assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="top_categores_sec mt-10">
      <!--
        we can use flex-grow instead of add new empty div to make the wanted style
      -->
      <div class="title px-5 d-flex align-center justify-space-between">
        <div></div>
        <h3 style="font-weight: 700; font-size: 30px" class="text-black">
          Top Categories
        </h3>
        <a class="text-black flex-start" style="font-size: 14px" href="#"
          >Shop All</a
        >
      </div>
      <v-container fluid>
        <v-row class="categories">
          <v-col v-for="cat in Categories" :key="cat.id" cols="2">
            <v-card elevation="0" class="text-center py-3 px-2">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    width: 80%;
                    height: 170px;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="cat.image"
                    style=""
                    :style="`width: 100%; height: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                    alt=""
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text class="">
                {{ cat.title }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-categories",
  // props: {
  //   Categories: {
  //     type: Array,
  //   },
  // },
  data: () => ({
    Categories: [
      {
        title: "mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "pc category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "audio & videon category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "gaming category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "home appliances category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "kitchen category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "cameras category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "consume cat",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "smart cat",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "accessories cat",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
    showenItem: {},
  }),
  mounted() {
    console.log("this.Categories", this.Categories);
  },
};
</script>

<style></style>
