<template>
  <div class="school">
    <h1>学校名称：{{ SchoolName }}</h1>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      SchoolName: "尚硅谷",
      address: "地址",
    };
  },
};
</script>

<style>
.school {
  background-color: aquamarine;
}
</style>