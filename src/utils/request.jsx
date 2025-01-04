// axios的封装处理
import axios from "axios";
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
    return config
},(error)=>{
    return Promise.reject(error)
})

// 添加响应拦截器
// 在响应返回到客户端之前，做一次拦截，重点处理返回的数据
request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export {request}