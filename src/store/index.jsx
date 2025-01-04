// Redux，一个状态管理库，用于管理应用的状态，并确保所有组件都能一致地访问这些状态
// 单一数据原则，应用的整个状态树保存在一个单一的、不可变的对象中，store
// 状态是可读的，应用的状态只能通过派发（dispatch）一个动作（action）来修改，而不能直接修改状态
// 使用纯函数进行修改，改变状态的唯一方法是通过纯函数（reducer），这些函数接收当前的状态和一个动作，然后返回新的状态

// 流程：
// 1、用户触发事件
// 2、派发一个动作（action）
// 3、动作被传递给reducer，reducer返回新的状态
// 4、新状态更新到store，React组件重新渲染

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

export default configureStore({
    reducer:{
        user:userReducer
    }
})