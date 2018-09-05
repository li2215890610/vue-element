import Vue from 'vue'
import App from './App'
import router from './router'

// import ElementUI from 'element-ui'

// Vue.use(ElementUI);

import {
  Input, Button, Form, FormItem, Slider, Icon, Container, Header, Main, Footer, Row, Col, Menu, MenuItem, Submenu, Dropdown, DropdownMenu, DropdownItem, Table, TableColumn, Pagination, Dialog,
  Message, DatePicker, Radio, Select, Option, Checkbox, CheckboxGroup, RadioGroup,
  Upload
} from 'element-ui'

Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);

Vue.use(Upload);



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

Vue.prototype.$message = Message;

//使用vuex
Vue.use(Vuex)


// import * as filters from './filters'; // 全局vue filter
// //便利挂载过滤器
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// });


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
