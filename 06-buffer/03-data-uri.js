#!/usr/bin/node
const http=require("http");
const fs=require("fs");
var fileName=process.argv[2];
if(process.argv.length!==3){
  console.error("命令行参数格式：cmd filename")
  process.exit(1);
}
else{
  if(!isNaN(Number(process.argv[2]))){
    console.log("命令参数错误")
    process.exit(2);
  }
else{
var buf=fs.readFileSync(fileName);
var dataURL='data:image/png;base64,'+buf.toString('base64');
var html='<!DOCTYPE html><html><head><title>hello</title></head><body><img src="'+dataURL+'"/></body></html>'
http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);}
}



