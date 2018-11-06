#!/usr/bin/node
const cp=require('child_process');
console.log('pid:',process.pid);
cp.fork('./02-child.js');

global.setTimeout(()=>{
  console.log('i am father.bye');
  process.exit();
},6000);

