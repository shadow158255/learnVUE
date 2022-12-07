//求和相关配置
export default {
    namespaced:true,
    actions:{
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
    },
    mutations:{
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
        },
    
    },
    state:{
        sum: 0, //求和数字
        school: "尚硅谷", //求和数字
        subject: "前端", //求和数字
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}