<template>
  <div class="demo">
    <h1>学校姓名：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return { name: "zs", address: "北京" };
  },
};
</script>

<style>
.demo {
  background-color: aqua;
}
</style>
