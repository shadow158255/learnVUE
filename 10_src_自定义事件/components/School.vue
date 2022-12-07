<template>
  <div class="school">
    <h2>学校名称{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendSchoolName">点我给app发送学校名称</button>
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
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
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