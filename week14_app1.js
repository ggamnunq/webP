const express = require('express');
const app = express();
app.set('port', 500);

// app.use(function(req, res){

//     // res.writeHead(200,{'content-type' : 'text/html'});
//     // send("<h1> Hi! Welcomddddddde~</h1> <h1>Hello World!</h1>");

    

// });

app.use((req, res, next) => {
    res.status(200).send('<h1>Welcome</h1>');
});

app.listen(app.get('port'), () => {
    console.log('Server listening on oprt 500');
});
