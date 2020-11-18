<template>
  <div class="tabBarBox">
    <RouterLink
      class="smallBox"
      v-for="i in tabData"
      active-class="selected"
      :key="i.id"
      :to="i.path"
      @click="selectId = i.id"
    >
      <!--      <img />-->
      <span>{{ i.name }}</span>
    </RouterLink>
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
          name: "首页",
          path: "/home"
        },
        {
          id: 2,
          name: "购物车",
          path: "/shoppingCart"
        },
        {
          id: 3,
          name: "类别",
          path: "/category"
        },
        {
          id: 4,
          name: "我的",
          path: "/myInfo"
        }
      ],
      selectId: 1
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
}
.selected {
  color: red;
}
</style>
