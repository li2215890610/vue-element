import Vue from 'vue';
import Router from 'vue-router';
import routerData from "./routerData";
Vue.use(Router);

export default new Router({
  module:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: routerData.router.Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          component: routerData.router.welcomePage,
          meta: { requiresAuth: true},
        },
        {
          path: '/ExperimentDemoDaseTable',
          component: routerData.router.ExperimentDemoDaseTable,
          meta: { requiresAuth: true, keepAlive: true},
        },
        {
          path: '/FormalEnvironmentTable',
          component: routerData.router.FormalEnvironmentTable ,
          meta: { requiresAuth: true ,keepAlive: true},

        },
        { //正式环境模板
          path: '/completeTemplate',
          component: routerData.router.completeTemplate,
          meta: { requiresAuth: true ,keepAlive: true},
        },
        {//上传组件
          path: '/upload',
          component: routerData.router.upload,
          meta: { requiresAuth: true },
        },
        {//表单验证
          path:'/FormValidation',
          component: routerData.router.FormValidation,
          meta: { requiresAuth: true },
        },
        {//子组件父组件传值
          path:'/ComponentTransmissionValue',
          component: routerData.router.ComponentTransmissionValue,
          meta: { requiresAuth: true },          
        }
      ]
    },
    {
      path: '/login',
      component: routerData.router.login
    }, {
      path: '/*',
      component: routerData.router.error,
    },
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition  // 游览器返回记住位置
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
})
