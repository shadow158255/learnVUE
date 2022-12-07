<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://img0.baidu.com/it/u=3877121122,3659353481&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
      />
      <a slot="footer" src="https://img0.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a src="https://img0.baidu.com">单机游戏</a>
        <a src="https://img0.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a src="https://img0.baidu.com">经典</a>
          <a src="https://img0.baidu.com">热门</a>
          <a src="https://img0.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
  data() {
    return {
      food: ["红烧肉", "鱼香肉丝", "包子", "蛋炒饭"],
      games: ["红色警戒", "英雄联盟", "合金弹头", "王者荣耀"],
      films: ["《坦泰尼克号》", "《阿甘正传》", "《让子弹飞》", "《功夫》"],
    };
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