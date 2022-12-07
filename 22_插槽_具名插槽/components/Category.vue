<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">我是一些默认值，当没有人代替我时，我会出现</slot>
    <slot name="footer">我是一些默认值，当没有人代替我时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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