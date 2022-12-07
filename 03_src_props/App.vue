<template>
  <div>
    <Student name="zx" :age="19" gender="man" />
  </div>
</template>

<script>
//引入school组件
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style>
</style>