import Vue from "vue"

export default {
    install(Vue){
        console.log('@@@install',Vue)
        

         //给vue原型上添加一个方法（给vue原型上添加的方法和属性vm和vc都能用）
    Vue.prototype.hello = ()=>(alert('你好啊'))

    }
}