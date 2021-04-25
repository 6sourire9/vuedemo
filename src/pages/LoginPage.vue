<template>
  <NavBar :title="type === 'login' ? '登录' : '注册'" no-back="true"></NavBar>
  <!--    <img class="logo" src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">-->
  <van-form @submit="onSubmit">
    <van-field
      label="用户名"
      name="name"
      v-model="name"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      label="密码"
      name="password"
      v-model="password"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      center
      clearable
      label="验证码"
      placeholder="输入验证码"
      v-model="verify"
      :rules="[{ required: true, message: '请填写验证码' }]"
    >
      <template #button><image-verify ref="verifyRef"/></template>
    </van-field>
    <div v-if="type === 'login'">
      <div class="toggle-content" @click="toggle('register')">立即注册</div>
      <van-button type="primary" native-type="submit" block round size="medium">
        登录
      </van-button>
    </div>
    <div v-else>
      <div class="toggle-content" @click="toggle('login')">立即登录</div>
      <van-button block type="primary" native-type="submit" round size="medium">
        注册
      </van-button>
    </div>
  </van-form>
  <!-- <el-form
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
      <el-input v-model="verify"></el-input>
      <image-verify />
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
  </el-form>-->
</template>

<script>
import ImageVerify from "@/components/common/ImageVerify";
import { reactive, toRefs, ref } from "vue";
import NavBar from "@/components/navbar/NavBar";
import { Toast } from "vant";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "LoginPage",
  components: { ImageVerify, NavBar },
  setup() {
    const router = useRouter();
    const store = useStore();
    const verifyRef = ref(null);
    const state = reactive({
      name: "",
      password: "",
      verify: "",
      type: "login"
    });
    const toggle = v => {
      state.type = v;
    };
    const onSubmit = values => {
      console.log(values);
      if (
        state.verify.toLowerCase() !== verifyRef.value.imgCode.toLowerCase()
      ) {
        Toast.fail("验证码有误");
        return false;
      } else {
        store.commit("addUserInfo", values);
        router.push("/home");
      }
    };
    return {
      ...toRefs(state),
      toggle,
      onSubmit,
      verifyRef
    };
  }
};
</script>

<style scoped lang="less">
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
