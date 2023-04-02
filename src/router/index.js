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
import templates from "@/pages/templates/index.vue";
import AllTemplates from "@/components/templates/allTemplates.vue";
import headerIndex from "@/components/header/index.vue";
import footerIndex from "@/components/footer/index.vue";
import menuIndex from "@/components/menu/index.vue";
import dashboardIndex from "@/components/dashboard/index.vue";
import alertIndex from "@/components/alert/index.vue";
import formIndex from "@/components/form/index.vue";
import EcommerceIndex from "@/components/e-commerce/index.vue";
import LandingPagesIndex from "@/components/LandingPages/index.vue";
import buttonIndex from "@/components/button/index.vue";
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
  {
    name: "Templates",
    path: "/templates",
    component: templates,
    children: [
      {
        name: "Templates",
        path: "",
        component: AllTemplates,
      },
      {
        name: "header templates",
        path: "/templates/header-templates",
        component: headerIndex,
      },
      {
        name: "footer templates",
        path: "/templates/footer-templates",
        component: footerIndex,
      },

      {
        name: "menu templates",
        path: "/templates/menu-templates",
        component: menuIndex,
      },

      {
        name: "dashboard templates",
        path: "/templates/dashboard-templates",
        component: dashboardIndex,
      },

      {
        name: "button templates",
        path: "/templates/button-templates",
        component: buttonIndex,
      },
      {
        name: "form templates",
        path: "/templates/form-templates",
        component: formIndex,
      },

      {
        name: "alert templates",
        path: "/templates/alert-templates",
        component: alertIndex,
      },

      {
        name: "Ecommerce templates",
        path: "/templates/e-commerce-templates",
        component: EcommerceIndex,
      },
      {
        name: "Landing Pages templates",
        path: "/templates/Landing-pages-templates",
        component: LandingPagesIndex,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
