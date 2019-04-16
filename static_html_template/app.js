var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/about',function(req,res){
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/article',function(req,res){
    res.sendFile(__dirname + '/views/article.html')
})

app.listen(3000)