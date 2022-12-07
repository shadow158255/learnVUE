<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* 修改动画的参数 */
.todo-enter-active,
.todo-leave-active {
  transition: 0.5s linear;
}

/* 进入的起点和离开的终点 */
.todo-enter,
.todo-leave-to {
  transform: translateX(-100%);
}

/* 进入的终点和离开的起点 */
.todo-enter-to,
.todo-leave {
  transform: translateX(0);
}
</style>