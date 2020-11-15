<template>
  <div class="tabBarBox">
    <div class="smallBox" v-for="i in tabData" :key="i.id">
      <img />
      <span>{{ i.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabData: [
        {
          id: 1,
          name: "首页"
        },
        {
          id: 2,
          name: "购物车"
        },
        {
          id: 3,
          name: "我的"
        },
        {
          id: 4,
          name: "商品"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tabBarBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.smallBox {
  /*display: inline-block;*/
}
</style>
