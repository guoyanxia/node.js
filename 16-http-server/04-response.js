#!/usr/bin/node
const http=require('http');
http.createServer((req,res)=>{
  if(req.url==="/"){
    var html= '<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>Hello world!</h1></body></html>';
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');//渲染成页面
    res.end(html);
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Resource not found!');

  }
}).listen(8080);


