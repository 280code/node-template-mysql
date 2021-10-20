const Router = require('koa-router');
const user = new Router();
const bodyParser = require('koa-bodyparser');
const knex = require('../utils/knex')
user.use(bodyParser());
user.post('/',async (ctx)=>{
    console.log(ctx.request.body)
    let body = ctx.request.body;
    console.log(body.id);
    ctx.body="hello in post";
    let result = await knex.column('*').select().from("users");
    console.log(result);

})
user.get("/",async (ctx)=>{

    ctx.body="hello";
    console.log(ctx.request.id)
})
module.exports = user;
