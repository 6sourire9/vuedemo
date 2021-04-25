import { createStore } from "vuex";
// import { getCart } from "@/service/cart";

const store = createStore({
  state: {
    count: 0,
    userInfo: {}
  },
  mutations: {
    addCount(state, value) {
      // Object.assign(state, value);
      state.count = value;
    },
    addUserInfo(state, value) {
      state.userInfo = value;
    }
  },
  /*actions: {
    updateCount(ctx, data) {
      // const { data } = await getCart();
      ctx.commit("addCount", { count: data.length || 0 });
    }
  },*/
  modules: {}
});

export default store;
