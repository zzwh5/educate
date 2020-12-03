import axios from 'axios'
import qs from 'qs'

// 获取env中的 baseUrl
const baseUrl = process.env.VUE_APP_BASE_API
// 创建axios实例
axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// axios 相应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 封装get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: baseUrl + url + '?timestamp=' + new Date().getTime(),
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

// 封装post请求
export function post(url, params, type) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl + url + '?timestr=' + new Date().getTime(),
      data: params,
      headers: {
        'content-type': type || 'application/json'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 需要 qs的post请求
export function qspost(url, params) {
  axios({
    method: 'post',
    url: baseUrl + url + '?timestr=' + new Date().getTime(),
    data: qs.stringify(params),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      resolve(res.data)
    })
    .catch(error => {
      reject(error)
    })
}

// put请求
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: baseUrl + url + '?timestr=' + new Date().getTime(),
      data: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(error)
      })
  })
}

// delte请求
export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: baseUrl + url + '?timestr=' + new Date().getTime(),
      params: params // 请求参数拼接在url上
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

// PATCH 请求
export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseUrl + url + '?timestr=' + new Date().getTime(), params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

// 上传文件的post请求
export function upload(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: baseUrl + url + '?timestr=' + new Date().getTime(),
      data: params,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
