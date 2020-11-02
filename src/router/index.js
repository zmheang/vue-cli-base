import Vue from 'vue'
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router)

export const constRoutes = [
    {
        path: '/login',
        component: () => import("views/Login"),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: 'home',
        children: [
            {
                path: 'home',
                component: () => import('views/Home'),
                name: 'home',
                meta: {
                    title: 'home',
                    icon: 'flower'
                }
            }
        ]
    }
];

// 假如动态路由是后端返回
// eslint-disable-next-line no-unused-vars
// const map = {
//     // login: require('login/index').default    同步
//     login: () => import('login/index')          // 异步
// }
export const asyncRoutes = [
    {
        path: '/about',
        component: Layout,
        redirect: '/about/index',
        children: [
            {
                path: 'index',
                component: () => import('views/About'),
                name: '',
                meta: {
                    title: 'about',
                    icon: '',
                    roles: ['admin', 'editor']
                }
            }
        ]
    }
    ];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: constRoutes
})


