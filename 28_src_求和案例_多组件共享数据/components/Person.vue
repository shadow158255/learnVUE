<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: blueviolet">Count组件的总数为{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.persons;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSONS", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>