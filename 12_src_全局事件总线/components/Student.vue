<template>
  <div class="student">
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
      n: 0,
    };
  },
  mounted() {
    //console.log("Student", this.x);

    //事件总线接收数据
    this.$bus.$on("hello", (value) => {
      console.log("我是Student组件，收到了数据：", value);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<!-- 不写lang的话默认是使用css，使用lang的话是可选css或者less -->
<style lang="less" scoped>
.student {
  background-color: aquamarine;
  padding: 5px;
  margin-top: 30px;
}
</style>