<template>
  <div class="container">
    <Count title="游戏">
      <template scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Count>
  </div>
</template>

<script>
import Count from "./components/Count";
export default {
  name: "App",
  components: {
    Count,
  },
};
</script>
<style>
</style>