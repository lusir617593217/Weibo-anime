// 引入 axios
import axios from 'axios'
// 引入 vant 库
import { Dialog } from 'vant'

// 封装 axios
const request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://106.53.120.144' : 'http://localhost:8080',
  timeout: 150000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const res = response.data
  if (res.code === 1) {
    return response.data
  } else {
    Dialog({ message: res.message })
    return Promise.reject(res.message)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
