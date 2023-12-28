<template>
  <div class="quality-features bg-grey-lighten-2">
    <v-container fluid>
      <v-row class="text-center justify-center my-7">
        <v-col v-for="(card, i) in cards" :key="i" cols="2" class="px-2">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="text-center justify-center align-center d-flex px-4"
              height="300"
              :elevation="isHovering ? '2' : '0'"
              v-bind="props"
              :color="isHovering ? 'blue-lighten-4' : 'white'"
            >
              <div class="parent" style="margin: auto !important">
                <img :src="card.icon" alt="" style="width: 60px" class="mb-5" />
                <h5 style="text-transform: uppercase">{{ card.title }}</h5>
                <v-card-text class="pl-0 pb-1" style="font-weight;: 700" c>
                  {{ card.description }}
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "quality-features",
  data: () => ({
    cards: [
      {
        title: "QUALITY AND SAVING",
        description: "Comprehensive quality control and affordable prices",
        icon: "/assets/SVGS/quality-icon.svg",
      },
      {
        title: "GLOBAL WAREHOUSE",
        description: "Comprehensive quality control and affordable prices",
        icon: "/assets/SVGS/warehouse.svg",
      },
      {
        title: "FAST SHIPPING",
        description: "Comprehensive quality control and affordable prices",
        icon: "/assets/SVGS/fast-shipping.svg",
      },
      {
        title: "PAYMENT SECURITY",
        description: "Comprehensive quality control and affordable prices",
        icon: "/assets/SVGS/secure-payment.svg",
      },
      {
        title: "HAVE QUESTIONS?",
        description: "Comprehensive quality control and affordable prices",
        icon: "/assets/SVGS/questions.svg",
      },
    ],
  }),
};
</script>

<style scoped>
/*.quality-features {
  background-color: rgb(232, 232, 232);
}*/
</style>
>
