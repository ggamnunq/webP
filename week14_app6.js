const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('first middle');
    res.redirect('http://www.naver.com');
});

app.listen(500);
