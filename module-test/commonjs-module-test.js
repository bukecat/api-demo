// node 环境下执行

let a = require('./commonjs-module.js');

a.a = 'b';
console.log(a); // {a: 'b'}

a = {};
console.log(a); // {}
