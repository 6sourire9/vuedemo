import { createStore } from "vuex";

const store = createStore({
  state: {
    test: {
      a: 1
    }
  },
  mutations: {
    setTestA(state, value) {
      state.test.a = value;
    }
  },
  actions: {},
  modules: {}
});

export default store;
