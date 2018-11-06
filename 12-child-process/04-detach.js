#!/usr/bin/node
const cp=require('child_process');
console.log('i am father',process.pid);
var cmd=cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});

//cmd.stdout.pipe(process.stdout);
global.setTimeout(()=>{
  console.log('i am father,bye');
  process.exit();
},6000)




