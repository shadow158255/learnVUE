<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("进入路由守卫", to, from, next);
    if (to.meta.isAuth) {
      //判断是否含有权限
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，你没有权限！");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("离开路由守卫", to, from, next);
    next();
  },
};
</script>

<style>
</style>