<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h1>{{ n }}</h1>
    <h2 class="qwe">学生性别：{{ gender }}</h2>
    <button @click="sendStudentName">点我给app发送学生名称</button>
    <button @click="unBind">点我解绑自定义事件</button>
    <button @click="death">销毁当前vue实例对象</button>
    <button @click="addN">点我n+1</button>
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
  methods: {
    sendStudentName() {
      //触发Student组件实例身上的atguigu事件
      this.$emit("atguigu", this.name, this.gender);
      this.$emit("demo");
    },
    unBind() {
      //解绑自定义事件（只能解绑一个自定义事件）
      this.$off("atguigu");

      //解绑多个自定义事件
      //this.$off(["atguigu", "demo"]);

      //解绑所有自定义事件
      //this.$off(["atguigu", "demo"]);
    },
    death() {
      this.$destroy(); //销毁当前student组件实例对象，销毁后所有的student实例的自定义事件全部解绑
    },
    addN() {
      this.n++;
    },
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