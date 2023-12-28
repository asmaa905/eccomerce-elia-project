import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurrencyConvert from "../components/additionalComps/CurrencyConvert";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/currency-convert",
    name: "currency-convert",
    component: CurrencyConvert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
