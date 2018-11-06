#!/usr/bin/node
console.log("hello world");


console.log('file name:',__filename);
console.log('dir name:',__dirname);const path=require('path');
var filename=path.join(__dirname,'views','view.html');
console.log('filename:',filename);
