let buff1 = Buffer.alloc(12);
buff1.write('welcome to ALtCampus');
console.log(buff1.toString());

let buff2 = Buffer.allocUnsafe(12);
buff2.write('welcome to ALtCampus');
console.log(buff2.toString());

