import axios from "axios";
import { nanoid } from "nanoid";
//人员管理相关配置
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf("王")===0){
                context.commit('ADD_PERSONS',value)
            }else{
                alert("必须是姓王的！")
            }
        },
        addPersonServer(context){
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(response=>{
                context.commit('ADD_PERSONS',{id:nanoid,name:response.data})
            },
            error =>{
                alert(error.message)
            })
        }
    },
    mutations:{
        ADD_PERSONS(a,b){
            a.persons.unshift(b);
        }
    },
    state:{
        persons: [
            {id:'001',name:'张三'},
    ]
    },
    getters:{
        //当前拿到的state是自己局部的state，不是总的state
        firstPersonName(state){
            return state.persons[0].name
        }
    }


}