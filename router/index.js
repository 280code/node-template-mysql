const Router = require('koa-router');//引入路由构造器
const router = new Router();//创建一个路由器
const user = require('./user.js');

router.use('/user',user.routes(), user.allowedMethods())//使页面路由生效
module.exports = router//将此路由中间件暴露，服务器中枢文件app.js会激活此中间件代码，使所有路由生效。
