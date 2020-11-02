import Vue from "vue";
import Vuex from "vuex";
import permission from "./permission";
import user from "./user";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        permission, user
    },
    getters: {
        roles: state => state.user.roles,
        token: state => state.user.token,
        permission_routes: state => state.permission.routes
    }
})