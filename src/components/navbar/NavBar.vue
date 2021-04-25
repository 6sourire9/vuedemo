<template>
  <van-nav-bar
    class="nav-bar-style"
    :title="title"
    left-arrow="!noBack"
    @click-left="goBack"
    @click-right="onClickRight"
    :right-text="showLogin && '登录'"
  >
    <!-- <template #right>
      <div v-if="showLogin">
        <router-link to="/login" style="color: white">登录</router-link>
      </div>
    </template>-->
  </van-nav-bar>
  <el-row class="nav">
    <el-col :span="8">
      <i v-if="!noBack" class="el-icon-back" @click="goBack"></i>
    </el-col>
    <el-col :span="8" class="center">
      {{ title }}
    </el-col>
    <el-col :span="8">
      <div v-if="showLogin" style="text-align: right">
        <router-link to="/login" style="color: white">登录</router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    extraContent: {
      default: ""
    },
    back: {
      type: String,
      default: ""
    },
    noBack: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const state = reactive({
      showLogin: false
    });
    const router = useRouter();
    const store = useStore();
    onMounted(() => {
      console.log(store.state.userInfo);
      if (store.state.userInfo.name) {
        state.showLogin = false;
      } else {
        state.showLogin = true;
      }
    });
    const onClickRight = () => {
      router.push("/login");
    };
    const goBack = () => {
      if (!props.back) {
        router.go(-1);
      } else {
        router.push("/home");
      }
    };
    return { ...toRefs(state), goBack, onClickRight };
  }
};
</script>

<style scoped>
.nav-bar-style {
  @nav-bar-background-color: #ff8a9d;
}
.nav {
  background-color: #ff8a9d;
  color: white;
  display: flex;
  height: 44px;
  line-height: 44px;
  padding: 0px 8px;
}
.center {
  text-align: center;
}
</style>
