<template>
  <div class="demp">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="qwe">学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "zs",
      gender: "男",
    };
  },
};
</script>

<!-- 不写lang的话默认是使用css，使用lang的话是可选css或者less -->
<style lang="less" scoped>
.demp {
  background-color: aquamarine;
  .qwe {
    font-size: 30px;
  }
}
</style>