//引入Vue组件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入Vue-resource插件
import vueResource from 'vue-resource'

//引入store
import store from './store/index'
//关闭Vue生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(vueResource)



//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this        
    },   
})

