/**
 * 设置本地存储 
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:
 * localStorageSetItem("names",{
 *    name:"你好"
 * })
 */
export function localStorageSetItem(dataName, data) {
    window.localStorage.setItem(dataName, JSON.stringify(
        data
    ))
}
/**
 * 获取本地存储
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:
 * let data = localStorageGetItem("names")
 */
export function localStorageGetItem(data) {
    let jsonDatas = window.localStorage.getItem(data);
    return JSON.parse(jsonDatas)
}
/**
 * 删除单个本地存储
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:
 * localStorageRemoveItem("names")
 */
export function localStorageRemoveItem(data) {
    window.localStorage.removeItem(data)
}
/**
 * 删除全部本地存储
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:
 * localStorageRemoveItemAll()
 */
export function localStorageRemoveItemAll() {
    window.localStorage.clear()
}
/**
 * 设置Cookie 
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:setCookie('loginName', res.data.loginName, expireDays); //设置用户登录名
 */
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
/**
 * 获取Cookie
 * @param {*} 李广杨
 * @param {*} 2018-02-05\
 * 如下:
 * 实例 getCookie("curUserId");
 */
export function getCookie(name) {
    var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return arr[2];
    else return null;
}

/**
 * 动态引入css 
 * @param {*} 李广杨
 * @param {*} 2018-02-22
 * 实例:
 * loadStyle("../../static/Refresh/jrscroll.css")
 */
export function loadStyle(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
/**
 * 动态引入js 
 * @param {*} 李广杨
 * @param {*} 2018-02-22
 * 实例:
 * loadScript("../../static/Refresh/jrscroll.js")
 */
export function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

/**
 * 表单验证不能为空
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 * 实例:
 * loadScript("../../static/Refresh/jrscroll.js")
 */
export function isDataNoEmpty(params) {
    if (params == '' || params == undefined || params == null ) {
        this.$message.warning("网络错误,请稍后重试！");   
    } else {
        
    }
}




