<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2 class="qwe">学生性别：{{ gender }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "zs",
      gender: "男",
      n: 0,
    };
  },
  methods: {
    //连接方法二：
    demo(msgName, data) {
      console.log(
        "有人发布了hello消息，hello消息的回调执行了",
        msgName,
        data,
        this
      );
    },
  },
  mounted() {
    //console.log("Student", this.x);
    //事件总线接收数据
    // this.$bus.$on("hello", (value) => {
    //   console.log("我是Student组件，收到了数据：", value);
    // });

    //方法二：分开写(这样可以直接拿到this)
    this.pubId = pubsub.subscribe("hello", this.demo);

    //方法一：整体箭头式函数
    // this.pubId = pubsub.subscribe("hello", (msgName, data) => {
    //   //如果这里使用箭头函数时，this（vc）才能被拿到
    //   console.log(this);
    //   console.log("有人发布了hello消息，hello消息的回调执行了", msgName, data);
    // });

    //***如果在拿不到别的方法中的数据的情况下，就把他赋值给this，其他用到的地方直接使用this.来获取 */
  },
  beforeDestroy() {
    //this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<!-- 不写lang的话默认是使用css，使用lang的话是可选css或者less -->
<style lang="less" scoped>
.student {
  background-color: aquamarine;
  padding: 5px;
  margin-top: 30px;
}
</style>