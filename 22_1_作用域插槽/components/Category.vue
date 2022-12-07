<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 相当于组件件传值，使用者通过scope接收 -->
    <slot :games="games" msg="hello">我是作用域插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "英雄联盟", "合金弹头", "王者荣耀"],
    };
  },
};
</script>

<style>
.category {
  background-color: aqua;
  height: 300px;
  width: 200px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>