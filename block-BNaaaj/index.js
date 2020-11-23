console.log('welcome to nodejs');

let os = require('os');
let cpus = os.cpus().length;
let freemem = os.freemem();
let uptime = os.uptime();
let version = os.version()
console.log(cpus,freemem,uptime,version);

let {readFile,unlink,readFileSync} = require('fs');

readFileSync('./app.js');
readFile('./app.js',(err,content)=> {
    console.log(err.content);
})