#!/usr/bin/node
const log = console.log;
const code = process.argv[2];       
if( isNaN(Number(code))) {
  if(process.argv.length<3){
    log("请输入命令参数");
    process.exit(1);
  }else{
    console.log("命令参数不正确");
    process.exit(1);
  }
} else {
  log('退出码：', code);
  process.exit(code);
}






