//该文件用于创建Vuex中最为核心的store

//引入Vue组件
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions ={
    jia(a,b){
        console.log(a,b);
        a.commit('JIA',b)
    },
    jian(a,b){
        a.commit('JIAN',b)
    },
    oddJia(a,b){
        console.log(a);
        if(a.state.sum % 2){
            a.commit('ODDJIA',b)
        }
    },
    waitAdd(a,b){
        setTimeout(()=>{
            a.commit('WAITADD',b)
        },500)
        
    }
}
//准备mutations-用于处理数据（state）
const mutations = {
    JIA(a,b){
        console.log(a,b);
        a.sum+=b
    },
    JIAN(a,b){
        a.sum-=b
    },
    ODDJIA(a,b){
        a.sum+=b
    },
    WAITADD(a,b){
        a.sum+=b
    }
}
//准备/导出state-用于存储数据
const state = {
    sum: 0, //求和数字
    school: "尚硅谷", //求和数字
    subject: "前端", //求和数字
}

//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
}) 

