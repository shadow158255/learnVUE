<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      v-show="!todo.isEdit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
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
    handleEdit(todo) {
      //将文字变为输入框
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        console.log("todo身上没有isEdit");
        this.$set(todo, "isEdit", true);
      }
      //自动获取焦点($nextTick用于下一次模板改动执行完毕（即方法执行完毕）
      //后重调用指定函数，如果没有该方法，自动获取焦点方法直接写在这里就无效
      //因为自动获取焦点方法会在模板解析中就执行完毕，那时候input框还未出现，所以
      //自动获取焦点也无从说起了)
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, n) {
      todo.isEdit = false;
      if (!n.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, n.target.value);
      //获取输入框中值得方法：是用$event方在某个关联方法的参数中，
      //谁触发这个方法后就会调用这个方法，是用.target.value获取参数
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