<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <slot>Hello</slot>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade" >
      <p v-if="show">hello</p>
    </transition>
<!--    <keep-alive></keep-alive>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function () {
    return {show:true}
  },
  computed:function () {
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .fade-enter-from,
    .fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>
