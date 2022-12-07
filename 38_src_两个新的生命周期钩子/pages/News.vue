<template>
  <ul>
    <li :style="{ opacity }">欢迎学习vue</li>
    <li>news001<input /></li>
    <li>news002<input /></li>
    <li>news003<input /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("News组件将要被销毁");
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log("@");
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },

  activated() {
    console.log("new组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("new组件被失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>