const http = require('http')

const server = http.createServer(function(req, res){

    res.writeHead(200,{'content-type' : 'text/html'});
    res.write("<h1> Hi! Welcome~");
    res.end("<h1>Hello World!</h1>");

});

server.listen(500);


