fs = require('fs');

const data = fs.readFileSync('./demo/data.txt');

console.log(data.toString());
