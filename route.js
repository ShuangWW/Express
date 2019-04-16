// 路由
var express = require('express')
var app = express()
var router = express.Router();

router.get('/',function(req,res){
    console.log('主页Post请求');
    res.send('Hello POST')
})

router.get('/del_user',function(req,res){
    console.log('/del_user GET请求');
    res.send('删除页面')
})

router.get('/list_user',function(req,res){
    console.log('list_user GET请求')
    res.send('用户列表页面')
})

router.get('/ab*cd',function(req,res){
    console.log('/ab*cd GET请求')
    res.send('正则匹配')
})
app.use('/app',router)
var server = app.listen(8081,function(){
    console.log('路由模块',server.address())
})