// 用户相关的所有请求
import { request } from "@/utils";

// 1、获取频道信息

export function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET',
    })
}

// 2、提交文章表单数据

export function createArticleAPI(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}