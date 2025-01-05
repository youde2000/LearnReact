// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { setToken as _setToken,getToken } from "@/utils";
import { loginAPI,getProfileAPI } from "@/apis/user";

// 初始化state
const userStore = createSlice({
    name:"user",
    initialState:{
        token:getToken()||'', // 初始化时检查localStorage内是否有token
        userInfo:{}
    },
    // 声明同步的修改方法
    reducers:{
        setToken(state,action){
            state.token =action.payload // redux保存token
            // localStorage也保存token
            _setToken(action.payload)
        },
        setUserInfo(state,action){
            // action.payload是Redux中action对象的一个属性，用于携带要传递的数据
            // payload是通过该action更新Redux状态（state）的数据，可以是任意类型的数据
            state.userInfo = action.payload 
        },
        // 退出登录，清空用户Token
        clearUserToken(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

// 解构出actionCreater
const {setToken,setUserInfo,clearUserToken} = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装，完成登录获取token
const fetchLogin = (loginForm)=>{
    return async (dispatch)=>{
        // 1、发送异步请求
        const res = await loginAPI(loginForm)

        // 2、提交同步action进行token的存入
        dispatch(setToken(res.data.token))
    }
}

// 获取个人用户信息，异步
const fetchUserInfo = ()=>{
    return async (dispatch)=>{
        // 1、发送异步请求
        const res = await getProfileAPI()

        // 2、提交同步action进行token的存入
        dispatch(setUserInfo(res.data))
    }
}

export {fetchLogin,setToken,fetchUserInfo,clearUserToken}

export default userReducer