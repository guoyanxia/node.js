#!/usr/bin/node
const http=require('http');
const cp=require('child_process');
http.createServer((req,res)=>{
  var cmd=cp.spawn('./02-child.js');
  cmd.stdout.pipe(res);
}).listen(8080);





