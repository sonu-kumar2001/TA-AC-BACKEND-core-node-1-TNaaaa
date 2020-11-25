let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(handlerServer);

function handlerServer(req,res) {
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;
    if(req.method === 'GET' && pathName === "/file") {
        res.setHeader('Content-Type','text/html')
        fs.readFile('./node.html',(err,content)=> {
            if(err) console.log(err);
            res.end(content);
        })
    } else if(req.method === 'GET' && pathName === '/stream') {
        fs.createReadStream('./node.html').pipe(res);
    }
}

server.listen(5555, ()=> {
    console.log('server is running on port 5555');
})