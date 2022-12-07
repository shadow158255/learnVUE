<template>
  <div>
    <Student />
    <hr />
    <School></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
//引入school组件
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style>
</style>