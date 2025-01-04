// 添加路由实例

import Layout from "@/pages/Layouts";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";

// 配置路由实例
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default router;