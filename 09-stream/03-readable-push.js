#!/usr/bin/node
const Readable=require('stream').Readable;
var src=new Readable();
src.push('hello');
src.push('world');//信源写入一些数据
src.push(null);//发送信源结束信号
src.pipe(process.stdout);//将信源接到输出管道





