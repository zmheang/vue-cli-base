import router from "../router";
import store from "@/store";
import {getToken} from "@/utils/auth";

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if(hasToken) {
        // 已经登录过
        if(to.path === '/login') {
            next({path: '/'})
        }else {
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if(hasRoles) {
                next()
            }else {
                // 请求用户信息
                const {roles} = await store.dispatch('user/getInfo')
                console.log(roles)
                // 根据角色，动态生成路由
                const acRoutes = await store.dispatch('permission/generateRoutes', roles)
                // 添加至router
                router.addRoutes(acRoutes)
                // 重定向
                next({...to, replace: true})
            }
        }
    } else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        }else {
            next(`/login?redirect=${to.path}`)

        }
    }
})