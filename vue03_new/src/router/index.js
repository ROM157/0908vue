import Vue from 'vue';//引入Vue模块
import VueRouter from 'vue-router';//引入vue-router模块
import Home from '../pages/Home.vue'
import Nav from '../pages/nav.vue'
import About from '../pages/About.vue'
import Menu from '../pages/Menu.vue'
import Gallery from '../pages/Gallery.vue'
import Blog from '../pages/Blog.vue'
import Features from '../pages/Features.vue'
import Shop from '../pages/Shop.vue'
//为便于查看路由之间的层级关系,通常创建一个二级文件夹,此处index.vue为Classify
import Classify from '../pages/classify/index.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'
import Registor from '../pages/Registor.vue'
import Error from '../pages/Error.vue'
//下列三个为引入二级路由
import List_a from '../pages/classify/List_a'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    component: Home
}, {
   path: '/nav',
   component: Nav
},{
    path: '/about',
       component: About
},{
    path: '/gallery',
       component: Gallery
},{
    path: '/blog',
       component: Blog
},{
    path: '/features',
       component: Features
},{
    path: '/shop',
           component: Shop
    },{
    path: '/menu',
    component: Menu
},{
   path: '/classify',
   component: Classify,
   children: [{//此处为二级路由
       path: 'list_a',
       component: List_a,
       name: 'list_a'
      }]
}, {
   path: '/detail/:id',
   component: Detail,
   name: 'detail'
}, {
   path: '/login',
   component: Login
}, {
   path: '/registor',
   component: Registor
}, {
   path: '/error',
   component: Error
}, {
   path: '**',//当用户路径输入错误,重定向到error
   redirect: '/error'
}]

const router = new VueRouter({
   routes,
   mode: 'history'//和后端说明
})

export default router