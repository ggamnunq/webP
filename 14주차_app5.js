const express = require('express');
const app = express();


app.use(function(req, res, next){
    console.log('first middle');
    res.send({name:'KJY', age:23});
});

app.listen(500);