import axios from 'axios';
// import { Message } from 'element-ui';

import qs from 'qs';

//设置超时时间
axios.defaults.timeout = 5000;
// 设置url
axios.defaults.baseURL = 'http://120.78.66.243:56190/dplatform-oa-consumer';

// axios.defaults.baseURL = 'http://192.168.31.110:8080/dplatformSpringjdbc-demo-consumption';

//http request 请求拦截器
axios.interceptors.request.use(
  config => {
    const token = "bjs160122000001";
    //qs 系列化参数
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   console.log(config.params)
    //   //追加全局参数
    //   config.params = {'curUserId':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//添加响应之后拦截器
axios.interceptors.response.use(function(response){
  //对响应数据做些事
   return response;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  //追加全局参数
  data.curUserId = "160122000001";
  // data.loginName= "liguangyang"
  data.curLoginName = "liguangyang"
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
/**
 * 封装上传文件方法
 * 
 * 参考 https://www.cnblogs.com/cjh1111/p/7017295.html
 * @param url
 * @param data
 * @returns {Promise}
 */

// export function postFile(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err)
//       })
//   })
// }












