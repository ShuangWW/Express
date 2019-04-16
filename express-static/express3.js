var express = require('express')
var app = express()

// express提供了内置中间件express.static来设置静态文件：图片、CSS、js等
app.use('/public',express.static('public'));
app.get('/',function(req,res){
    res.send('Hello World')
})

var server = app.listen(8081,function(){
    console.log(server.address())
})