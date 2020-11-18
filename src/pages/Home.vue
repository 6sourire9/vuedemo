<template>
  <NavBar class="navHome"><template>购物街</template></NavBar>
</template>

<script>
import NavBar from "../components/navbar/NavBar";
export default {
  name: "Home",
  components: { NavBar }
};
</script>

<style scoped>
.navHome {
  background-color: orange;
  color: white;
}
</style>
