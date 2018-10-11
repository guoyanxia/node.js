#!/usr/bin/node
const Readable=require("stream").Readable;
var src=new Readable();
var c=97;
src._read=function(){
  src.push(String.fromCharCode(c++));//while循环，执行了26次
  if(c>'z'.charCodeAt(0)) src.push(null);
}
src.pipe(process.stdout);




