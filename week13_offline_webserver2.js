const fs = require('fs');
const http = require('http')
const server = http.createServer();

server.on('request', (req, res) => {

    res.writeHead(200,{'content-type' : 'text/html'});
    const filename = "week10_online_worker.html";
    fs.readFile(filename, (err, data) => {
        // res.write(data);
        // res.end();
        if(err==null){
            res.write(data);
            res.end();
        }else{
            res.end("File Not Found");
        }
    });

});



server.listen(500);


