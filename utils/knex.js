// var mysql = require('knex')({  client: 'mysql',  connection: {    host : '127.0.0.1', 
// IP地址    user : 'root', // 数据库用户名    password : '123456', 
// 数据库密码    database : 'cauth' // 连接到的数据库的名字  }});
// module.exports = { mysql }
let knex = require('knex')({
    client:"mysql",
    connection:{
        host:"主机地址",
        user:"账户名",
        password:"密码",
        database:"数据库"
        
    }
})
module.exports = knex;