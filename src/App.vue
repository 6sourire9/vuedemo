<template>
  <!--  <HelloWorld msg='Welcome to Your Vue.js App'/>-->
  <!--  <HelloWorld>Welcome to Your Vue.js</HelloWorld>-->
  <!--  <TodoList />-->
  <Home />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from "@/components/todolist/TodoList";
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
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
