<template>
  <!--    阻止默认事件提交-->
  <form @submit.prevent="addTodo">
    <input type="text" v-model="todoText" placeholder="new todo" />
  </form>
  <ul v-if="todoList.length">
    <TodoListItem
      v-for="todo in todoList"
      :todo="todo"
      :key="todo.id"
      @remove="removeTodo"
    />
  </ul>
  <p v-else>nothing</p>
</template>

<script>
import TodoListItem from "@/components/todolist/TodoListItem";

let nextTodoId = 1;

export default {
  name: "TodoList",
  components: { TodoListItem },
  data() {
    return {
      todoText: "",
      todoList: []
    };
  },
  methods: {
    addTodo() {
      const newTodoText = this.todoText.trim();
      if (newTodoText) {
        this.todoList.push({ id: nextTodoId++, text: newTodoText });
        this.todoText = "";
      }
    },
    removeTodo(item) {
      this.todoList = this.todoList.filter(todo => todo !== item);
    }
  }
};
</script>

<style scoped></style>
