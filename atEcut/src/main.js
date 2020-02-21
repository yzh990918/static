import Vue from 'vue'
import App from './App'
import Mpvuerouterpatch from 'mpvue-router-patch'
import cuCustom from '../static/color-ui/cu-custom.vue'
Vue.use(Mpvuerouterpatch)
Vue.component('cu-custom', cuCustom)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
