#!/usr/bin/node
const http=require("http");
      path=require('path');
      fs=require('fs');
http.createServer((req,res)=>{
 // console.log(req.headers);
  console.log(req.url);
  file=path.join(__dirname,req.url);
  console.log(file);
  fs.createReadStream(file).pipe(res);//pipe是管道
 // res.end(fs.readFileSync(file).toString('utf8'));
 console.log(fs.readFileSync(file));
}).listen(8080);









