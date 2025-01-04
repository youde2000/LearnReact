import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'

import './index.scss'

// 导入路由router
import router from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 使用RouterProvider进行路由绑定 */}
    <RouterProvider router={router}/>
  </StrictMode>
)
