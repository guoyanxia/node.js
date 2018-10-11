#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2]|| __filename;
fs.readSync(file,(err,data)=>{//异步读取文件readSync
  if(err){
    console.log(err.message)
  process.exit(1);
  }else{
    console.log(data.toString('utf8');
  }

})


