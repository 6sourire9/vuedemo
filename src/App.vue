<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg='Welcome to Your Vue.js App'/>-->
  <!--  <HelloWorld>Welcome to Your Vue.js</HelloWorld>-->
  <TodoList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "@/components/todolist/TodoList";

export default {
  name: "App",
  components: {
    TodoList
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

<style></style>
