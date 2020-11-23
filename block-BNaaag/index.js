let fs = require('fs');

fs.readFile('./content.md', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

let syncData = fs.readFileSync('./content.md');
console.log(syncData.toString());

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());