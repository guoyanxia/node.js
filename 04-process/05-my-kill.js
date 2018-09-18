#!/usr/bin/node

const sig=process.argv[3];
const pid=process.argv[2];
if(process.argv.length!==4 ||isNaN(Number(pid))){
  console.log("命令行参数错误");
  process.exit();
}else{
  process.kill(pid,sig);
}
