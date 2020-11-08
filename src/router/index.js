import Vue from "vue";
import Router from "vue-router";

import Home from "../pages/Home";
import Category from "../pages/Category";
import MyInfo from "../pages/MyInfo";
import ShoppingCart from "../pages/ShoppingCart";

const router = new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      redirect: "/home",
      component: Home
    },
    {
      path: "/category",
      name: "类别",
      component: Category
    },
    {
      path: "/myInfo",
      name: "我的",
      component: MyInfo
    },
    {
      path: "/shoppingCart",
      name: "购物车",
      component: ShoppingCart
    }
  ],
  mode: "history" //去除地址栏中的#
});

export default router;
