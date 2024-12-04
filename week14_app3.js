const express = require('express');
const app = express();

app.set('port', 500);
app.use(function(req, res, next){
    console.log('First Middleware ...');
    req.user = 'KJY <br>';
    next();
});

app.use(function(req, res, next){
    console.log('Second Middleware ... ');
    res.status(200).send(`<h1>${req.user}reponds at Express Server</h1>`);
    next();
});

app.listen(app.get('port'), () => {
    console.log('Server listening on oprt 500');
});
