<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      //this.checkTodo(id);

      //全局事件总线写法
      //this.$bus.$emit("checkTodo", id);

      //消息订阅预发布写法
      pubsub.publish("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定要删除吗？")) {
        //this.deleteTodo(id);

        //全局事件总线写法
        //this.$bus.$emit("deleteTodo", id);

        //消息订阅预发布写法
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li :hover {
  background-color: rgb(88, 96, 96);
}
li :hover button {
  display: block;
}
</style>