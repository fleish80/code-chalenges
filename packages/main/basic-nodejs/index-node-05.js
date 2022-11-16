const fs = require('fs');
const path = require("path");

const resolvePath = path.resolve(__dirname, 'files\\input.txt');

console.log('resolve', resolvePath);
let textIn = fs.readdirSync(resolvePath);

console.log(textIn);
