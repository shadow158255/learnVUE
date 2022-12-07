<template>
  <div class="app">
    <h1>{{ msg }},{{ studentName }}</h1>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 第一种写法：使用v-on/@-->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <Student @atguigu="getStudentName" @demo="m1" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子组件给父组件传递数据 第二种写法：使用ref-->
    <!-- <Student ref="student" /> -->

    <hr />
    <!-- 通过父组件给子组件传递函数类型的props实现：子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
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
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(x) {
      console.log("App收到了学校名:", x);
    },
    getStudentName(name, gender) {
      console.log("getStudentName被调用了", name, gender);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    //this.$refs.student.$on("atguigu", this.getStudentName);
    // setTimeout(() => {
    //   this.$refs.student.$on("atguigu", this.getStudentName);
    // }, 3000);
  },
};
</script>

<style>
.app {
  background-color: blanchedalmond;
  padding: 5px;
}
</style>