<template>
  <NavBar :title="type === 'login' ? '登录' : '注册'" no-back="true"></NavBar>
  <!--    <img class="logo" src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">-->
  <el-form
    label-position="left"
    ref="form"
    :model="form"
    label-width="80px"
    size="mini"
    class="login-form"
  >
    <el-form-item label="用户名">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="password"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="vertical"></el-input>
    </el-form-item>
    <div v-if="type === 'login'">
      <div class="toggle-content" @click="toggle('register')">立即注册</div>
      <el-button
        class="toggle-button"
        type="primary"
        @click="onSubmit"
        round
        size="medium"
      >
        登录
      </el-button>
    </div>
    <div v-else>
      <div class="toggle-content" @click="toggle('login')">立即登录</div>
      <el-button
        class="toggle-button"
        type="primary"
        @click="onSubmit"
        round
        size="medium"
      >
        注册
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "vue";
import NavBar from "@/components/navbar/NavBar";

export default {
  name: "LoginPage",
  components: { NavBar },
  setup() {
    const state = reactive({
      name: "",
      password: "",
      vertical: "",
      type: "login"
    });
    const toggle = v => {
      state.type = v;
    };
    return {
      ...toRefs(state),
      toggle
    };
  }
};
</script>

<style scoped>
.logo {
  width: 120px;
  height: 120px;
  display: block;
  margin: 80px auto 20px;
}
.login-form {
  padding: 16px 24px 0;
}
.toggle-content {
  font-size: 8px;
  padding-bottom: 16px;
  color: #9de2ff;
}
.toggle-button {
  width: 100%;
}
</style>
