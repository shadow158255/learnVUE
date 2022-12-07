<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="" appear>
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: rgb(64, 226, 43);
  /* transition: 0.5s linear; */
}
</style>