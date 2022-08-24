import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home";
import Contact from "@/components/contact";
import ImageCompressor from "@/views/imageCompressor.vue";
import Profile from "@/views/profile.vue";
import Exchange from "@/views/Exchange.vue";
import Todo from "@/views/Todo.vue";
import Weather from "@/views/Weather.vue";
import Compress from "@/image-handler/compress.vue";
import Resize from "@/image-handler/resize.vue";
import Buy from "@/image-handler/buy.vue";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../components/login.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/overview/Todo",
    name: "Client",
    component: () => import("../components/client.vue"),
    beforeEnter(to, from, next) {
      axios("api/token")
        .then((res) => {
          if (res.statusText === "OK") {
            next();
          } else {
            next("/login");
          }
        })
        .catch((err) => {
          next("/login");
          return err;
        });
    },
    children: [
      {
        path: "/overview/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/overview/Todo",
        name: "Todo",
        component: Todo,
      },
      {
        path: "/overview/imageCompressor/",
        name: "imageCompressor",
        component: ImageCompressor,
        children: [
          {
            path: "",
            name: "Compress",
            component: Compress,
          },
          {
            path: "resize",
            name: "Resize",
            component: Resize,
          },
          {
            path: "buy",
            name: "Buy",
            component: Buy,
          },
        ],
      },

      {
        path: "/overview/Weather",
        name: "Weather",
        component: Weather,
      },
      {
        path: "/overview/Exchange",
        name: "Exchange",
        component: Exchange,
      },
    ],
  },

  {
    path: "/Register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../components/Register.vue"),
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../components/Dashboard.vue"),
  },
  {
    path: "/ChatLogic",
    name: "ChatLogic",
    component: () =>
      import(/* webpackChunkName: "ChatLogic" */ "../components/ChatLogic.vue"),
  },
  {
    path: "/chatBox",
    name: "chatBox",
    component: () => import("../components/chatBox.vue"),
  },
  {
    path: "/forgot_password",
    name: "Forgot_password",
    component: () => import("../components/forgot_password.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
