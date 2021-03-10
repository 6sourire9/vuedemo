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
      <i :class="i.icon" class="tab-icon"></i>
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
          path: "/home",
          icon: "el-icon-s-home"
        },
        {
          id: 2,
          name: "分类",
          path: "/category",
          icon: "el-icon-menu"
        },
        {
          id: 3,
          name: "购物车",
          path: "/shoppingCart",
          icon: "el-icon-shopping-cart-2"
        },
        {
          id: 4,
          name: "我的",
          path: "/myInfo",
          icon: "el-icon-user"
        }
      ],
      selectId: 1
    };
  }
};
</script>

<style scoped lang="less">
.tabBarBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /*height: 30px;*/
  /*line-height: 30px;*/
  box-shadow: 0 0 10px gray;
  padding: 8px 0;
}
.smallBox {
  text-decoration: none;
  color: black;
  font-size: 12px;

  .tab-icon {
    text-align: center;
    display: block;
  }
}
.selected {
  color: #ff8a9d;
}
</style>
