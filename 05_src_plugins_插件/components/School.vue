<template>
  <div>
    <h2>学校名称{{ name }}</h2>
    <h2>学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "shagnguigu",
      gender: "男",
    };
  },
};
</script>