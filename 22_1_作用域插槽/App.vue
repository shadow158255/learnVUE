<template>
  <div class="container">
    <Category title="游戏">
      <template scope="zx">
        <ul slot="center">
          <li v-for="(g, index) in zx.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 支持结构赋值 -->
      <template scope="{games}">
        <ol slot="center">
          <li style="color: red" v-for="(g, index) in games" :key="index">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>