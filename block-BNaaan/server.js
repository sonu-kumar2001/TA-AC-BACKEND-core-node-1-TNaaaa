let http = require('http');

let server = http.createServer(handlerServer);

function handlerServer(req,res) {
    console.log(req.headers,req.url,req.method);
    res.end('welcome')
}

server.listen(3000,()=> {
    console.log('server is running on port 3000');
})