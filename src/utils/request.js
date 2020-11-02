import axios from "axios";
import {MessageBox, Message} from "element-ui";
import store from "@/store";
import {getToken} from "@/utils/auth";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if(store.getters.token) {
            // 根据后台的格式
            // config.headers['x-token'] = getToken()
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code !== 0) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5000
            })
            if(res.code === 10001 || res.code === 10002 || res.code === 10003) {
                MessageBox.confirm('登录状态异常，请重新登录', '确认登录信息', {
                    confirmButtonText: 'relogin',
                    cancelButtonText: 'cancel',
                    type: 'warning'
                })
                    .then(() => {
                        store.dispatch('')
                            .then(() => {
                                location.reload()
                            })
                    })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        }else {
            return res
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5000
        })
        return Promise.reject(error)
    }
)

export default service

