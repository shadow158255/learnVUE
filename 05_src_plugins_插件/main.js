//引入Vue组件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入插件
import plugins from './plugins'
//关闭Vue生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(plugins)
//创建VM
new Vue({
    el: '#app',
    render: h => h(App)
})