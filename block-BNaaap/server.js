let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req,res) {
    res.writeHead(201,{'Content-Type': 'text/html'});
    res.end('working');
}

server.listen(4444, ()=> {
    console.log('server is running on 4444');
})