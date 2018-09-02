
/**
 * 定义路由导出模块
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 */

let router = {}
//home.vue引入进来 按需加载 主页    
router.Home = resolve => {
    require.ensure(['../Pages/Home.vue'], () => {
        resolve(require('../Pages/Home.vue'))
    })
}
//登陆
router.login = resolve => {
    require.ensure(['../Pages/login.vue'], () => {
        resolve(require('../Pages/login.vue'))
    })
}
router.completeTemplate = resolve => {
    require.ensure(['../Pages/completeTemplate.vue'], () => {
        resolve(require('../Pages/completeTemplate.vue'))
    })
}
router.ExperimentDemoDaseTable = resolve => {
    require.ensure(['../Pages/ExperimentDemoDaseTable.vue'], () => {
        resolve(require('../Pages/ExperimentDemoDaseTable.vue'))
    })
}
router.welcomePage = resolve => {
    require.ensure(['../components/LayoutComponent/welcomePage.vue'], () => {
        resolve(require('../components/LayoutComponent/welcomePage.vue'))
    })
}
router.FormalEnvironmentTable = resolve => {
    require.ensure(['../Pages/FormalEnvironmentTable.vue'], () => {
        resolve(require('../Pages/FormalEnvironmentTable.vue'))
    })
}

router.FormValidation = resolve => {
    require.ensure(['../Pages/FormValidation.vue'], () => {
        resolve(require('../Pages/FormValidation.vue'))
    })
}
router.ComponentTransmissionValue = resolve => {
    require.ensure(['../components/ComponentTransmission/ComponentTransmissionValue.vue'], () => {
        resolve(require('../components/ComponentTransmission/ComponentTransmissionValue.vue'))
    })
}
router.upload = resolve => {
    require.ensure(['../Pages/upload.vue'], () => {
        resolve(require('../Pages/upload.vue'))
    })
}
router.error = resolve => {
    require.ensure(['../components/LayoutComponent/error404.vue'], () => {
        resolve(require('../components/LayoutComponent/error404.vue'))
    })
}

export default {
    router
}