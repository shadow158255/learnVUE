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
                            path:'details',
                            component:Details,
                        }
                    ]
                }
            ]
        },
    ]
})