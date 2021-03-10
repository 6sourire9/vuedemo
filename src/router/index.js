// import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
// Vue.use(Router);

// import Home from "../pages/Home";
// import Category from "../pages/Category";
// import MyInfo from "../pages/MyInfo";
// import ShoppingCart from "../pages/ShoppingCart";

const router = createRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/LoginPage")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/pages/Home")
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/pages/Category")
    },
    {
      path: "/myInfo",
      name: "myInfo",
      component: () => import("@/pages/MyInfo")
    },
    {
      path: "/shoppingCart",
      name: "shoppingCart",
      component: () => import("@/pages/ShoppingCart")
    }
  ],
  mode: "history", //去除地址栏中的#
  history: createWebHashHistory()
});

export default router;
