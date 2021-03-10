<template>
  <NavBar><template #center>商品分类</template></NavBar>
  <el-tabs
    type="border-card"
    tab-position="left"
    style="height:calc(100vh - 74px);"
  >
    <el-tab-pane label="热门">热门</el-tab-pane>
    <el-tab-pane label="上衣">上衣</el-tab-pane>
    <el-tab-pane label="裤子">裤子</el-tab-pane>
    <el-tab-pane label="鞋子">鞋子</el-tab-pane>
  </el-tabs>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  name: "Category",
  components: { NavBar }
};
</script>

<style scoped></style>
