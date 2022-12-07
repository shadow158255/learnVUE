<template>
  <div class="school">
    <h2>学校名称{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="sendSchoolName">点我发送学校名给学生</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "shagnguigu",
      gender: "男",
      pa: {
        age: 12,
        name: "张三",
        tobe: {
          zx: "dsfa",
          sd: 122,
        },
      },
    };
  },
  mounted() {
    console.log("School", this.x);
  },
  methods: {
    sendSchoolName() {
      //this.$bus.$emit("hello", this.name);
      pubsub.publish("hello", this.pa);
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