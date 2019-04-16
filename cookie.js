/* 利用中间件向Node.js服务器发送cookie信息
   执行node express.js
   访问http://127.0.0.1:8081查看终端信息输出
*/

var express = require('express')
/* cookie-parser
        cnpm i cookie-parser --save
        是一个解析Cookie的工具，通过req.cookies可以取到传过来的cookie，并将其转换为对象
*/
var cookieParser = require('cookie-parser')
var util = require('util')

var app = express()
app.use(cookieParser())

app.get('/',function(req,res){
    console.log("Cookies:" + util.inspect(req.cookies))
})

app.listen(8081)