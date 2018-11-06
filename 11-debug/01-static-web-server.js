#!/usr/bin/node
const http=require("http"),
      path=require('path'),
      //log=util.debuglog('wd');
      fs=require('fs');
      const log=console.log;
      var file;
http.createServer((req,res)=>{
  
  //log(req.header);//打印调试
  //log();
  //log(req.url);//打印调试
  file=path.join(__dirname,req.url);
  //log();
  //log(file);//打印调试
  fs.createReadStream(file).pipe(res);//pipe是管道
  var read=fs.createReadStream(file);
  read.on('error',(err)=>{
  res.end(err.message);
  return;
  });
read.pipe(res);
}).listen(8080);
















