let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer(handlerServer);

function handlerServer(req,res) {
    console.log(req,res);
}

server.listen(5000, ()=> {
    console.log('server is running on port 5000');
})
// 2nd question
let server5100 = http.createServer(handlerServer5100);

function handlerServer5100(req,res) {
    res.end('My first server in NodeJS');
}

server5100.listen(5100,()=> {
    console.log('server is running on port 5100');
});

//3rd question
let server5555 = http.createServer(handlerServer5555);

function handlerServer5555(req,res) {
    console.log(req.headers);
    // res.setHeader('Content-Type','applicatoin/json');
    res.end(JSON.stringify(req.headers['user-agent']));
}

server5555.listen(5555,()=> {
    console.log('server is running on port 5555');
});
//4th question
let server5566 = http.createServer(handlerServer5566);

function handlerServer5566(req,res) {
    console.log(req.url,req.method);
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;
    if(req.method === 'GET' && pathName === '/') {
        res.end('welcome to node js')
    }
}

server5566.listen(5566,()=> {
    console.log('server is running on port 5566');
});
// 5th question
let server7000 = http.createServer(handlerServer7000);

function handlerServer7000(req,res) {
    console.log(req.headers);
    res.end(JSON.stringify(req.headers));
}

server7000.listen(7000,()=> {
    console.log('server is running on port 7000');
})
//6th question
let server3333 = http.createServer(handlerServer3333);

function handlerServer3333(req,res) {
    res.statusCode = 202;
    res.end('its running')
}

server3333.listen(3333,()=> {
    console.log('server is running on port 3333');
});
//7th question
let server8000 = http.createServer(handlerServer8000);

function handlerServer8000(req,res) {
    res.setHeader('Content-Type','text/html');
    res.end('<h3>Welcome to altcampus</h3>');
}

server8000.listen(8000,()=> {
    console.log('server is running on port 8000');
});
//8th question
let server8001 = http.createServer(handlerServer8001);

function handlerServer8001(req,res) {
    res.writeHead(201,{'Content-Type':'text/html'});
    res.end('<h3>Welcome to altcampus</h3>');
}

server8001.listen(8001,()=> {
    console.log('server is running on port 8001');
});
//9th question
let server8888 = http.createServer(handlerServer8888);

function handlerServer8888(req,res) {
    res.setHeader('Content-Type','application/json');
    res.end('{success: true, message: "Welcome to Nodejs"}');
}

server8888.listen(8888,()=> {
    console.log('server is running on port 8888');
});
// 10th question
let server5050 = http.createServer(handlerServer5050);

function handlerServer5050(req,res) {
    console.log(req.method);
    if(req.method = 'POST' && req.url === '/') {
        res.writeHead(201,{'Content-Type':'text/html'});
        res.end('<h2>posted for first time</h2>');
    }
}

server5050.listen(5050,()=> {
    console.log('server is running on port 5050');
});
// 11th question
let server2345 = http.createServer(handlerServer2345);

function handlerServer2345(req,res) {
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;

    if(req.method === 'GET' && pathName === '/') {
        res.setHeader('Content-Type','plain/text');
        res.end('sonu');
    } else if(req.method === 'GET' && pathName === '/about') {
        res.setHeader('Content-Type','text/html');
        res.end('<h2>sonu</h2>')
    } else {
        res.statusCode = 404;
        res.end('error page not found');
    }
}

server2345.listen(2345, ()=> {
    console.log('server is running on port 2345');
});

// 12th question
let server6000 = http.createServer(handlerServer6000);

function handlerServer6000(req,res) {
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;

    if(req.method === 'GET' && pathName === '/users') {
        fs.createReadStream('./users.html').pipe(res);
    } else if(req.method === 'POST' && pathName === '/users') {
        res.setHeader('Content-Type','text/html');
        res.end('Posted for the second time')
    } else {
        res.statusCode = 404;
        res.end('error page not found');
    }
}

server6000.listen(6000, ()=> {
    console.log('server is running on port 6000');
});
//13th question
let server6001 = http.createServer(handlerServer6001);

function handlerServer6001(req,res) {
    let parsedUrl = url.parse(req.url);
    let pathName = parsedUrl.pathname;
    let queryParams = parsedUrl.query;

    if(req.method === 'GET' && pathName === '/users') {
        res.setHeader('Content-Type','application/json')
        res.end(queryParams);
    }

}

server6001.listen(6001,()=> {
    console.log('server is running on port 6001');
})