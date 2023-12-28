import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//pinia
import { createPinia } from "pinia";

//mitt to make emit globally
import Emitter from "mitt";

//swipper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});
createApp(App)
  .use(vuetify)
  .provide(Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
