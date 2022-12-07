<template>
  <div class="Count">
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和增加十倍为:{{ $store.getters.bigSum }}</h3>
    <h3>我在{{ $store.state.school }}，学习{{ $store.state.subject }}</h3>
    <h3 style="color: blueviolet">下方组件的总人数是{{ persons.length }}</h3>
    <select v-model.number="n" name="" id="">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="odd(n)">当前求个为奇数再加</button>
    <button @click="waitingIncrement(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据。(数组写法)
    ...mapState(["sum", "subject", "school", "persons"]),

    ...mapGetters(["bigSum"]),
  },
  methods: {
    //借助mapMutations生成对应的方法，方法中调用commit去联系mutations(对象写法)：
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    //借助mapMutations生成对应的方法，方法中调用commit去联系mutations(对象写法)：
    ...mapActions({ odd: "oddJia", waitingIncrement: "waitAdd" }),
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