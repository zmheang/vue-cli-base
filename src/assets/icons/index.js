import Vue from 'vue'
import icons from 'components/icons.vue'

// 图标自动的导入
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)

// 自定义Icons组件的挂载
Vue.component('Icons', icons)