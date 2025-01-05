# Layout展示个人信息
用户的信息通常很有可能在多个组件中都需要共享使用，所以同样应该放到Redux中进行维护
+ 使用Redux进行信息管理
+ Layout组件中提交action
+ Layout组件中完成渲染

# 处理Token失效
用户长时间未在网站中做任何操作并且在规定的失效时间到达之后，当前的Token就会失效
> 前端如何知道Token已经失效了？
+ 通常在Token失效之后再去请求后端接口，后端会返回401状态码，前端可以监控这个状态做后续的操作
> Token失效了前端需要做什么？
+ 在axios拦截中监控401状态码
+ 清除失效token，跳转到登录页

# API模块封装
当前的接口请求放到了功能实现的位置，没有在固定的模块内进行维护，后期查找维护困难
+ 将项目中所有的接口按照业务模块以函数的形式统一封装到apis模块中
request.jsx -> apis ->{user.jsx、article.jsx、其他接口模块}