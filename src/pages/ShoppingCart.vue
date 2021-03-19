<template>
  <NavBar title="购物车"></NavBar>
  <div v-if="list.length > 0">
    <div>
      <van-checkbox-group v-model="checklist">
        <van-swipe-cell v-for="item in list" :key="item.id" class="cart-cell">
          <van-row class="cart-detail">
            <van-col span="2">
              <van-checkbox :name="item.id" />
            </van-col>
            <van-col span="22">
              <div class="cart-justify">
                <span>{{ item.title }}</span>
                <span>x {{ item.count }}</span>
              </div>
              <div class="cart-justify">
                <span>￥ {{ item.price }}</span>
                <van-stepper
                  disable-input
                  v-model="item.count"
                  min="1"
                  max="10"
                />
              </div>
            </van-col>
          </van-row>

          <template #right>
            <van-button
              square
              @click="handleDelete(item.id)"
              text="删除"
              type="danger"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar :price="total" button-text="结算" @submit="handleSubmit">
      <van-checkbox @click="handleCheckAll" v-model:checked="checkAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
  <div v-if="!list.length">
    <van-empty description="购物车空空如也">
      <van-button type="primary" @click="goTo">前往选购</van-button>
    </van-empty>
  </div>
  <tab-bar />
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import NavBar from "@/components/navbar/NavBar";
import { useRouter } from "vue-router";
import TabBar from "@/components/tabbar/TabBar";
export default {
  name: "ShoppingCart",
  components: { TabBar, NavBar },
  setup() {
    const router = useRouter();
    const state = reactive({
      list: [{ id: 1, title: "手机", count: 1, price: 1000 }],
      checklist: [],
      checkAll: true,
      total: 0
    });
    const goTo = () => {
      router.push("/home");
    };
    console.log(1, state.checklist);
    const total = computed(() => {
      let sum = 0;
      let lists = state.list.filter(i => state.checklist.includes(i.id));
      lists.forEach(i => {
        sum += i.count * i.price;
      });
      return sum;
    });
    function handleSubmit() {}
    function handleCheckAll() {
      if (!state.checkAll) {
        state.checklist = state.list.map(i => i.id);
      } else {
        state.checklist = [];
      }
    }
    function handleDelete(id) {
      console.log(id);
    }
    return {
      ...toRefs(state),
      goTo,
      handleSubmit,
      handleCheckAll,
      handleDelete,
      total
    };
  }
};
</script>

<style scoped lang="less">
.cart-cell {
  padding-top: 8px;
}
.cart-detail {
  padding: 0 8px;
  .cart-justify {
    display: flex;
    justify-content: space-between;
  }
}
</style>
