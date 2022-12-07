<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: blueviolet">Count组件的总数为{{ sum }}</h3>
    <h3>列表中第一个人的名字是{{ firstName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addSomebody">添加一个姓名随机的人</button>
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
      return this.$store.state.personAbout.persons;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSONS", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      this.name = "";
    },
    addSomebody() {
      this.$store.dispatch("personAbout/addPersonServer");
      this.name = "";
    },
  },
};
</script>

<style>
</style>