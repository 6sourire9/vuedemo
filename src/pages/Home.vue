<template>
  <NavBar class="navHome" title="购物街"></NavBar>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div>
    <header class="good-header">新品上线</header>
  </div>

  <!--<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="流行" name="first">流行</el-tab-pane>
    <el-tab-pane label="新款" name="second">新款</el-tab-pane>
    <el-tab-pane label="精选" name="third">精选</el-tab-pane>
  </el-tabs>-->
  <tab-bar />
</template>

<script>
import NavBar from "../components/navbar/NavBar";
import TabBar from "@/components/tabbar/TabBar";
export default {
  name: "Home",
  components: { TabBar, NavBar },
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="less">
@import "../components/common/style/base";
.navHome {
  background-color: #ff8a9d;
  color: white;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.good-header {
  background: #f9f9f9;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: @primary;
  font-size: 16px;
  font-weight: 500;
}
</style>
