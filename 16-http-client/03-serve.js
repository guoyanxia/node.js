#!/usr/bin/node
const http=require('http');
http.createServer((req,res)=>{
  console.log('header:',req.headers);
  req.pipe(process.stdout);
  res.end('OK');
}).listen(8080);




