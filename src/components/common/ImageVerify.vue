<template>
  <canvas ref="verify" width="120" height="40" @click="handleDraw" />
</template>

<script>
import { ref, toRefs, reactive, onMounted } from "vue";
export default {
  name: "ImageVerify",
  setup() {
    const verify = ref(null);
    const state = reactive({
      pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      width: 120,
      height: 40,
      imgCode: ""
    });
    onMounted(() => {
      handleDraw();
    });
    const handleDraw = () => {
      state.imgCode = draw();
    };
    const randomNum = (min, max) => {
      return parseInt(Math.random() * (max - min) + min); //得到两数之间的整数
    };
    const randomColor = (min, max) => {
      const r = randomNum(min, max);
      const g = randomNum(min, max);
      const b = randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    };
    const draw = () => {
      const ctx = verify.value.getContext("2d");
      ctx.fillStyle = randomColor(180, 230); //填充颜色
      ctx.fillRect(0, 0, state.width, state.height); //填充位置
      let imgCodeStr = "";
      //随机字符串
      for (let i = 0; i < 4; i++) {
        const text = state.pool[randomNum(0, state.pool.length)];
        imgCodeStr += text;
        const fontSize = randomNum(18, 40); //字体
        const deg = randomNum(-30, 30); //角度
        ctx.font = fontSize + "px Simhei";
        ctx.textBaseline = "top"; //文本基线，定义对齐方式
        ctx.fillStyle = randomColor(80, 150);
        ctx.save();
        ctx.translate(30 * i + 15, 15); //平移
        ctx.rotate((deg * Math.PI) / 180); //旋转
        ctx.fillText(text, -15 + 5, -15); //填充文字
        ctx.restore();
      }
      //随机干扰线
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height));
        ctx.strokeStyle = randomColor(180, 230); //绘制样式
        ctx.closePath();
        ctx.stroke();
      }
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(
          randomNum(0, state.width),
          randomNum(0, state.height),
          1,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fillStyle = randomColor(150, 200);
        ctx.fill();
      }
      return imgCodeStr;
    };
    return { ...toRefs(state), handleDraw, verify };
  }
};
</script>

<style scoped></style>
