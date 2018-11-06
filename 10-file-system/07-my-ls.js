#!/usr/bin/node
const fs=require('fs');
var dir=process.argv[2];
fs.readdirSync(dir);
console.log(fs.readdirSync(dir));

