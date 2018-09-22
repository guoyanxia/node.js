#!/usr/bin/node
const fs=require("fs");
const fileName=process.argv[2];
var buf=fs.readFileSync(fileName);
console.log("width:",buf.readUInt32LE(18));
console.log("height:",buf.readUInt32LE(22));
console.log("deapth:",buf.readUInt32LE(28));


