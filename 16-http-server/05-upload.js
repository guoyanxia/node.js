#!/usr/bin/node
const http=require('http');
http.createServer((req,res)=>{
  if(req.url !=='/'){
    res.statusCode=404;
    res.end('error!');
  }else if(req.method !=="POST"){
    res.statusCode=404;
    res.end('error!');
  }else{
    console.log(`${req.method} ${req.url} Http/${req.httpVersion}`);//起始行
    console.log(req.headers);//请求头
    console.log('');
    req.pipe(process.stdout);//请求体
    res.end('ok');
  }
}).listen(8080);



