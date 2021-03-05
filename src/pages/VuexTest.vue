<template>
  <h1>test count</h1>
  <h1>test count: {{ count }}</h1>
  <!--  <div>count * 2 = {{ doubleCount }}</div>-->
  <!--<div>state from vuex {{ a }}</div>
  <button @click="add">add</button>
  <button @click="update">update a</button>-->
</template>

<script>
// import { computed, watch, getCurrentInstance } from "vue";
export default {
  name: "VuexTest",
  data() {
    let count = 0;
    const add = () => {
      count++;
    };
    /*watch(
      //监听器
      () => count.value,
      val => {
        console.log(`count is ${val}`);
      }
    );*/
    /*const doubleCount = computed(() => count.value * 2); //计算属性
    const { ctx } = getCurrentInstance();
    // console.log(ctx.$router.currentRoute.value);
    const a = computed(() => ctx.$store.state.test.a);
    console.log("a", this.$store.state.test.a);
    const update = () => {
      ctx.$store.commit("setTestA", count); //调用setTestA方法
    };*/
    return {
      count,
      // doubleCount,
      add
      // a,
      // update
    };
  }
};
</script>

<style scoped></style>
