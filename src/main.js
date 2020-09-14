// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import vuex from 'vuex'
import store from './store/index.js'
import VueLazyload from 'vue-lazyload' //图片懒加载
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
Vue.use(Vuetify)
//使用懒加载组件
Vue.use(VueLazyload,{
  error: require('./assets/logo.png'),//当加载图片失败的时候
  loading: require('./assets/logo.png'),//当加载图片成功的时候
  preLoad:1
})
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuetify,
  store,
  components: { App },
  template: '<App/>'
})
