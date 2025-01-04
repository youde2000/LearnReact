// 封装高阶组件
// 核心逻辑，判断：有token就跳转，无token就登录
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({children}){
    const token = getToken()
    if(token){
        return <>{children}</>
    }else{
        // 重定向到登录页
        return <Navigate to={'/login'} replace />
    }
}