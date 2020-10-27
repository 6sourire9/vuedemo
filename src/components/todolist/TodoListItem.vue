<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped></style>
