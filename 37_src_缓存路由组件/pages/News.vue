<template>
  <ul>
    <li>news001<input /></li>
    <li>news002<input /></li>
    <li>news003<input /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("News组件将要被销毁");
  },
};
</script>

<style>
</style>