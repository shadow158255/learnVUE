<template>
  <div class="container">
    <Count title="游戏">
      <template scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Count>
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
};
</script>
<style>
</style>