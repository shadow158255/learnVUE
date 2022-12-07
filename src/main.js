//引入Vue组件
import Vue from 'vue'
//引入App组件
import App from './App.vue'
//引入ElementUI
import ElementUI from 'element-ui'
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue生产提示
Vue.config.productionTip = false
//使用组件
Vue.use(ElementUI, { ElementUI })

//创建VM
new Vue({
    el: '#app',
    render: h => h(App),
})

