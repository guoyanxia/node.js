#!/usr/bin/node
const http=require('http');
const url=require('url');

var address=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
address=global.encodeURI(address);//可以把url以编码,比如把石家庄编码为字符串啥的
const options={//组装请求数据
  hostname:url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,//pathname只解析出url，没有参数
  //path:url.parse(address).path可以解析出参数
  //method:'POST',
  headers:{
    'User-Agent':'1-my-curl.js'//请求头
  }
};
http.get(options,(res)=>{//请求体
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //响应起始行
  console.log(res.headers);//响应头
  console.log(); 
  res.pipe(process.stdout);//响应数据流
})










