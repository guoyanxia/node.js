#!/usr/bin/node
const http=require('http');
const url=require('url');
const log=console.log;
const qs=require('querystring');
var addr='http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#/d/e/f';
log('url:',addr);
log('protocal:',url.parse(addr).protocol);
log("auth:",url.parse(addr).auth);
http.createServer((req,res)=>{
  log('url:',req.url);
  log('hostname:',url.parse(req.url).hostname);
  log('port',url.parse(req.url).port);
  log("pathname:",url.parse(req.url).pathname);
  log('querystring:',url.parse(req.url).query);
  log('qs.parse:',qs.parse(url.parse(req.url).query));
  res.end('ok');
}).listen(8080);






