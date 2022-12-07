<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="test">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      this.$router.forward();
    },
    back() {
      this.$router.back();
    },
    test() {
      //参数正数标识向前走，负数标识后退，绝对值标识走/退的步数
      this.$router.go(2);
    },
  },
};
</script>

<style>
</style>