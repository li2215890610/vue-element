// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'

Vue.use(ElementUI);

Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'    // 默认主题

import { localStorageGetItem } from "./utils/index.js"


//引入请求方法
import { post, get } from './api.js'
//指向原型 封装的方法
Vue.prototype.$HTTPPost = post
Vue.prototype.$HTTPGet = get

//引入vuex
import Vuex from 'vuex'


Vue.config.productionTip = false

//使用vuex
Vue.use(Vuex)


/**
 * 限制非法进入权限
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!localStorageGetItem("a")) { //获取当前UUSERID 是否存在 
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//Vue-router
  components: { App },
  template: '<App/>'
})
