//引入Vue组件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip = false

//创建VM
new Vue({
    el: '#app',
    render: h => h(App)
})