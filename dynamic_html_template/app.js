var express = require('express');
var app = express();
/*
    hbs是模板引擎，express支持多种模板引擎
        安装 npm i hbs --save-dev
*/
var hbs = require('hbs');           // 加载hbs模块
/*
    bodyParser - node.js中间件，用于处理JSON,Raw,Text和URL编码数据
*/
var bodyParser = require('body-parser');

// 加载数据
var blogEngine = require('./blog');

app.set('view engine','html')       // 指定模板文件的后缀名为html
app.engine('html',hbs.__express);   // 运行hbs模块
app.use(bodyParser.json());


// render-对网页模板进行渲染，render的参数就是模板的文件名，默认放在子目录views中
app.get('/',function(req,res){
    res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()})
})
app.get('/about',function(req,res){
    res.render('about', {title:"自我介绍"})
})
app.get('/article/:id',function(req,res){
    var entry = blogEngine.getBlogEntry(req.params.id)
    res.render('article',{title:entry.title,blog:entry})
})

app.listen(3000)