<template>
  <div class="Count">
    <h1>当前求和为：{{ sum }}</h1>
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
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
      sum: 0, //求和数字
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum--;
    },
    odd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    waitingIncrement() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>