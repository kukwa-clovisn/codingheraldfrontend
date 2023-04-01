import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import "./interceptors/axios";

import store from "./composable/store";
import AOS from "aos";
import "aos/dist/aos.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  easing: "ease", // default easing for AOS animations
  once: false,
  delay: 2, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  mirror: false, // whether elements should animate out while scrolling past them
});

app.use(router).use(ElementPlus).mount("#app");
