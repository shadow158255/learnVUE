<template>
  <div class="school">
    <h2>学校名称{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendSchoolName">点我发送学校名给学生</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "shagnguigu",
      gender: "男",
    };
  },
  mounted() {
    console.log("School", this.x);
  },
  methods: {
    sendSchoolName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: aquamarine;
  padding: 5px;
}
</style>