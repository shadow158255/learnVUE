<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生性别：{{ gender }}</h2>
    <button @click="addAge()">点我年龄加1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个尚硅谷的学生:",
      myAge: this.age,
    };
  },
  //props: ["name", "age", "gender"],
  // props: {
  //   name: String,
  //   age: Number,
  //   gender: String,
  // },
  props: {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      default: 10,
    },
    gender: {
      require: true,
      type: String,
    },
  },
  methods: {
    addAge() {
      this.myAge++;
    },
  },
};
</script>