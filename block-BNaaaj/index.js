console.log('welcome to nodejs');

let os = require('os');

console.log(os.cpus(),os.freemem(),os.uptime(),os.version());

let fs = require('fs');
fs.readFile('./content.md',(err,content) => {
    if (err) throw err;
    console.log(content.toString())
});
fs.unlink('./content.md', (err) => {
    if (err) throw err;
    console.log('content.md was deleted');
  });