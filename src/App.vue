<template>
  <!--  <HelloWorld msg='Welcome to Your Vue.js App'/>-->
  <!--  <HelloWorld>Welcome to Your Vue.js</HelloWorld>-->
  <!--  <TodoList />-->
  <!--  <Home />-->
    <router-view v-slot="{Component}">
        <component :is="Component"/>
    </router-view>
<!--  <router-view />-->
  <!--<van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/shoppingCart" icon="home-o"
      >购物车</van-tabbar-item
    >
  </van-tabbar>-->
<!--  <TabBar />-->
  <!--  <h1>aaa</h1>-->
  <!--  <VuexTest />-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from "@/components/todolist/TodoList";
// import Home from "./pages/Home";
// import { Tabbar } from "vant";
// import {ElTag} from 'element-plus';
// import TabBar from "./components/tabbar/TabBar";
// import { useRouter, useRoute } from "vue-router";
// import { getCurrentInstance } from "vue";
// import VuexTest from "@/pages/VuexTest";
export default {
  name: "App",
  /*components: {
    // TodoList,
    // VuexTest
    // TabBar
    // Home
    // HelloWorld
  },*/
  /*method: {
    toHome() {
      // this.$router.push("/");
      const router = useRouter();
      router.push({ name: "home" });
    }
  },*/
  setup() {
    // const { ctx } = getCurrentInstance();
    // ctx.$router.push("/");
    /*const router = useRouter();
    const route = useRoute();
    console.log("route", route);
    console.log("router", router);
    const toHome = () => {
      router.replace({ name: "home" });
    };
    return { toHome };*/
  },
  created: function() {
    // this.$router.push("/");
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
