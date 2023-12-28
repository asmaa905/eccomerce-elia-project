//flashDeals
import axios from "axios";
import { defineStore } from "pinia";
export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilePhones: []
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log("res", res);
          this.flashDeals = res.data.products.slice(0, 8);
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
        })
        .catch((err) => console.log(err));
    },
  },
});
