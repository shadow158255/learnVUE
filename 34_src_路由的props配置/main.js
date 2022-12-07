//引入Vue组件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//关闭Vue生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)


//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
    router:router,
})

