#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2]|| __filename;

var src=fs.createReadStream(file);
src.on('error',(err)=>{
  console.error(err.message);
  process.exit(1);
})
src.on('open',function(){
 console.log('open');
 this.pipe(process.stdout);
})
//上面的代码是没有全局异常处理，需要两个事件监听
//下面的代码有全局异常处理，
fs.createReadStream(file).pipe(process.stdout);
process.on('uncaughtException',(err)=>{
  console.error(err.message);
  process.exit(1);
  
})
