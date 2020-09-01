import axios from 'axios';
import router from '@/router'
import {webStorage} from '@/utils/webStorage'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000 // request timeout
})

//发送拦截
service.interceptors.request.use(
  config => {
    let token = webStorage.getStorage('token') || '';
    config.headers['token'] = token;
    return config;
  }, err => {
    return Promise.reject(err);
  }
);
//接收拦截
service.interceptors.response.use(
  response => {
    if (response.data.errorCode == 102) {
      // 清除token
      webStorage.clearStorage('token');
      setTimeout(() => {
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
      }, 1000);
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.errorCode) {
        case 401:
            webStorage.clearStorage('token');
            router.replace({
                path: "/login",
                query: {
                redirect: router.currentRoute.fullpath
                }
            });
          break;
        case 102:
            // 清除token
            setTimeout(() => {
                webStorage.clearStorage('token');
                router.replace({
                    path: "/login",
                    query: {
                    redirect: router.currentRoute.fullpath
                    }
                });
            }, 1000);
            break;
        // 其他错误
        default:
          break;
      }
    }
    return Promise.reject(error.response.data)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function getAxios(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(`${url}`, {
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
export function postAixos(url, data = {}, timeOut = 5000) {
  return new Promise((resolve, reject) => {
    service.post(`${url}`, data, {timeout})
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function deleteAixos(url) {
  return new Promise((resolve, reject) => {
    service.delete(`${url}`)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patchAxios(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.patch(`${url}`, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function putAxios(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.put(`${url}`, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
