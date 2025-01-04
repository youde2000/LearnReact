// axios的封装处理
import axios from "axios";
import { getToken,removeToken } from ".";
// 1、根域名配置

// 2、超时时间

// 3、请求拦截器 / 响应拦截器

const request = axios.create({
    baseURL:'https://obscure-space-adventure-65vg9qqq79w35pr6-5173.app.github.dev',
    timeout:5000
})

// 添加请求拦截器
// 在发送请求之前，做一次拦截，可以插入一些自定义的配置，例如参数的处理
request.interceptors.request.use((config)=>{
    // 操作config，并注入token数据
    // 1、获取token
    const token = getToken()
    if (token){
        // 将token拼接到请求头
        config.headers.Authorization = `Bearer ${token}`
    }
    // 2、按照后端的格式要求做token拼接
    return config
},(error)=>{
    return Promise.reject(error)
})

// 添加响应拦截器
// 在响应返回到客户端之前，做一次拦截，重点处理返回的数据
request.interceptors.response.use((response)=>{
    // 对2xx状态码会触发该函数
    return response.data
},(error)=>{
    // 对2xx之外的状态码会触发该函数
    // 监控401 token失效
    console.dir(error)
    if(error.response.status === 401){
        removeToken()   // 清除失效token
        router.navigate("/login")   // 跳转到登录界面
        window.location.reload()    // 强制页面刷新
    }
    return Promise.reject(error)
})

export {request}