<template>
  <!--  <HelloWorld msg='Welcome to Your Vue.js App'/>-->
  <!--  <HelloWorld>Welcome to Your Vue.js</HelloWorld>-->
  <!--  <TodoList />-->
  <Home />
  <TabBar />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from "@/components/todolist/TodoList";
import Home from "./pages/Home";
import TabBar from "./components/tabbar/TabBar";

export default {
  name: "App",
  components: {
    TabBar,
    Home
    // TodoList
    // HelloWorld
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
