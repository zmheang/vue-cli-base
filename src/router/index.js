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

export const asyncRoutes = [
    {
        path: '/about',
        component: Layout,
        redirect: '/about/iondex',
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


