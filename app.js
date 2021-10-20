const Koa = require('koa2');//创建一个后端服务构造器
const app = new Koa();//得到一个后端服务器
const port = 5050;//选择5050端口
//跨域
const cors = require("koa2-cors");
app.use(cors());
const router = require('./router/index')//引入路由
app.use(router.routes(), router.allowedMethods());//激活路由中间件，使路由生效

//监听客户端
app.listen(port,()=>{
    console.log("server is run third")
})
