import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.scss'
import 'normalize.css'

// 导入路由router
import router from './router'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* 使用RouterProvider进行路由绑定 */}
    <RouterProvider router={router}/>
  </Provider>
)
