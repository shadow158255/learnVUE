//该文件专门用于创建整个应用的路由

//引入路由
import VueRouter from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
 const router = new VueRouter({
    routes:[
        {
            name:'xiangguan',
            path:'/about',
            component:About,
            meta:{
                isAuth: true,
                title: '关于',
            }
        },
        {
            name:"zhuye",
            path:'/home',
            component:Home,
            meta:{
                title: '主页',
            },
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth: true,
                        title: '新闻',
                    },

                    //独享路由守卫，只有前置首位，可配合后置守卫来一起使用
                    beforeEnter:(to,from,next)=>{
                        console.log("独享路由守卫",to);
                            if(to.meta.isAuth){//判断是否含有权限
                                if(localStorage.getItem('school') === 'atguigu'){
                                    next()
                                }else{
                                    alert("学校名不对，你没有权限！")
                                }       
                            }else{
                             next()   
                            }
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth: true,
                        title: '消息',
                    },
                    children:[
                        {
                            name: 'xiangqing',
                            path:'details',
                            component:Details,
                            //props的第一种写法，值为对象，对象这种的所有key-value都会以props的形式传给details组件
                            //只能传递死数据，使用少
                            // props:{
                            //     a:1,
                            //     b:2,
                            // },


                            //props的第二种写法，值为布尔值，如果布尔值为真，就会将该路由收到的所有parms参数以props的形式传给details
                            //props:true,

                            //props的第三种写法，值为函数,该函数返回的对象中所有key-value都会以props的形式传给details组件
                            props($route){
                                return{
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }

                        }
                    ]
                }
            ]
        },
    ]
})

//全局前置路由首位----初始化时被调用、路由每次切换前被调用
// router.beforeEach((to,from,next)=>{
//     console.log("前置路由守卫",to);
//     if(to.meta.isAuth){//判断是否含有权限
//         if(localStorage.getItem('school') === 'atguigu'){
//             next()
//         }else{
//             alert("学校名不对，你没有权限！")
//         }       
//     }else{
//      next()   
//     }
// })

//全局前置路由首位----初始化时被调用、路由每次切换后被调用
router.afterEach((to,from)=>{
    console.log("后置路由守卫",to,from);
    document.title = to.meta.title || "硅谷系统"

})

export default router