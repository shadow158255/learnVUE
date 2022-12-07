//该文件专门用于创建整个应用的路由

//引入路由
import VueRouter from 'vue-router'

//引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Details from '../pages/Details'
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name: 'xiangqing',
                            path:'details/:id/:title',
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