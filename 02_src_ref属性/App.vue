<template>
  <div>
    <h1 v-text="hello" ref="he"></h1>
    <button @click="showDOM()" ref="but">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
//引入school组件
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      hello: "欢迎学习Vue！",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.he);
      console.log(this.$refs.but);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>