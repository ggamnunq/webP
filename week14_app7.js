const express = require('express');
const app = express();

app.use(function(req,res,next){
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    res.writeHead(20, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.send();
});

app.listen(500);
