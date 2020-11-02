import {constRoutes, asyncRoutes} from "@/router";

function hasPermission(roles, route) {
    if(route.meta && route.meta.roles) {
        let a = roles.some(role => route.meta.roles.includes(role))
        return a
    }else {
        return true
    }
}

export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.forEach(route => {
        const tmp = {...route}
        if(hasPermission(roles, tmp)) {
            if(tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) =>{
        state.addRoutes = routes
        state.routes = constRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({commit}, roles) {
        return new Promise(resolve => {
            let accessedRoutes
            if(roles.includes('admin')) {
                accessedRoutes = asyncRoutes || []
            }else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            commit('SET_ROUTES', accessedRoutes)
            resolve(accessedRoutes)
        })

    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
