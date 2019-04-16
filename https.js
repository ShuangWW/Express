/*
    fs
            以模仿标准POSIX函数的方式与文件系统进行交互
            所有文件系统都具有同步和异步的方式
            fs.readFileSync(path[,options])
                path    文件名或文件描述
                返回path内容

    https
            基于TLS/SSL的HTTP协议，在node.js中作为单独模块实现
            server.listen()         启动https服务器监听加密的连接
            https.createServer(options,requestlistener)
*/

var fs = require('fs');
var options = {
    key:fs.readFileSync('E:/ssl/myserver.key'),
    cert:fs.readFileSync('E:/ssl/myserver.crt'),
    passphrase:'1234'
}

var https = require('https');
var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send('Hello world express.js')
})

var server = https.createServer(options,app);
server.listen(8084)
console.log('Server is running on port 8084')