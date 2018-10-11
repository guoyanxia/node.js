#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2] || __filename;
var fid=fs.openSync(file,'r');//以只读方式打开文件
var len =fs.statSync(file).size;//读取文件的字节数
var buf=new Buffer(len);//创建一个缓存区
fs.readSync(fid,buf,0,len);//将fid文件从0开始读取，读取字节数为len个，并且保存在buf中
console.log(buf.toString('utf8'));//将buf中的数据以utf8方式编码
fs.closeSync(fid);//关闭文件






