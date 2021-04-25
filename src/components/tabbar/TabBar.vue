<template>
  <div class="tabBarBox">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">
        分类
      </van-tabbar-item>
      <van-tabbar-item
        badge="1"
        replace
        to="/shoppingCart"
        icon="shopping-cart-o"
      >
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/myInfo" icon="manager-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
    <!-- <RouterLink
      class="smallBox"
      v-for="i in tabData"
      active-class="selected"
      :key="i.id"
      :to="i.path"
      @click="selectId = i.id"
    >
      <i :class="i.icon" class="tab-icon"></i>
      <span>{{ i.name }}</span>
    </RouterLink>-->
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      num: 1,
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
  z-index: 10;
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
