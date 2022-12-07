<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isOk" @change="checkedAll" /> -->
      <input type="checkbox" v-model="isOk" />
    </label>
    <span>
      <span>已完成{{ downTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cleanAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "cleanAllTodo"],
  computed: {
    //总任务
    total() {
      return this.todos.length;
    },
    //已经完成的任务
    downTotal() {
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    // downTotal() {
    //   const x= this.todos.reduce((pre,current)=>{
    //     return pre + (current.done? 1:0)
    //   },0)
    // },
    //是否全部完成
    isOk: {
      get() {
        return this.total === this.downTotal && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    // checkedAll(e) {
    //   console.log(e.target.checked);
    //   this.checkAllTodo(e.target.checked);
    // },
    cleanAll() {
      if (confirm("您确定要清除已完成任务吗？")) {
        this.cleanAllTodo();
      }
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>