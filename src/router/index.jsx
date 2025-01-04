// 添加路由实例

import Layout from "@/pages/Layouts";
import Login from "@/pages/Login";

import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Article from "@/pages/Article";
import Home from "@/pages/Home";
import Publish from "@/pages/Publish";

// 配置路由实例
const router = createBrowserRouter([
    {
        path:"/",
        // element:<AuthRoute><Layout/></AuthRoute>,
        element:<Layout/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'article',
                element:<Article/>
            },
            {
                path:'publish',
                element:<Publish/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>
    }
])

export default router;