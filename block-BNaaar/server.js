let http = require('http');

let url = require('url');


let server = http.createServer(handlerServer);

function handlerServer(req,res) {
    let parsedURl = url.parse(req.url)
    let pathName = parsedURl.pathname;
    console.log(req.method,req.url,pathName);

    if(req.method === 'GET' && pathName === '/') {
        res.end('welcome to homepage')
    } else if(req.method === 'GET' && pathName == '/about') {
        res.setHeader('Content-Type','text/html');
        res.end('<h2>this is all about NodeJS</>')
    } else if(req.method === "POST" && pathName == '/about') {
        res.setHeader('Content-Type','application/json');
        res.end('{message: this is a post request}')
    }
}

server.listen(5000, ()=> {
    console.log('server is running on port 5000');
})