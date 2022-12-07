<template>
  <div class="Count">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和增加十倍为:{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ $store.state.school }}，学习{{ $store.state.subject }}</h3>
    <select v-model.number="n" name="" id="">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="odd">当前求个为奇数再加</button>
    <button @click="waitingIncrement">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //亲自写计算属性(计算属性写法)
    // sum() {
    //   return this.$store.state.sum;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // school() {
    //   return this.$store.state.school;
    // },

    //借助mapState生成计算属性，从state中读取数据。(对象写法)
    //...mapState({ sum: "sum", subject: "subject", school: "school" }),

    //借助mapState生成计算属性，从state中读取数据。(数组写法)
    ...mapState(["sum", "subject", "school"]),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    odd() {
      this.$store.dispatch("oddJia", this.n);
    },
    waitingIncrement() {
      this.$store.dispatch("waitAdd", this.n);
    },
  },
  mounted() {
    console.log("Count", this.$store);
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>