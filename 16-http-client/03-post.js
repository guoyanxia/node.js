#!/usr/bin/node
const http=require('http');
const url=require('url');
var address=process.argv[2] || "http://localhost:8080";
var options={
//url.parse()可以将一个完整的url地址分为很多部分，常用的有host,port等
  hostname:url.parse(address).hostname,
  post:url.parse(address).port,
  path:url.parse(address).pathname,
  headers:{
   'User-Agent':'03-post.js'
  },
  //method:'POST'
};
options.method='POST';
const req=http.request(options,(res)=>{
  console.log(`HTTP/${res.httpVersion} res.statusCode res.statusMessage`);
  console.log(res.headers);
  console.log();
  res.pipe(process.stdout);
});

req.on('error',(err)=>{
  console.log(err.message);
});
req.end();













