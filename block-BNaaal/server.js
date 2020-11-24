let http = require('http');

let server = http.createServer(handlerRequest);

function handlerRequest(req,res) {
    res.end('welcome')
}

server.listen(4000, ()=> {
    console.log('server is listeneing on port 4000');
})