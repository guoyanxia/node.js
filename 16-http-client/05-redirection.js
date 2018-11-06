#!/usr/bin/node
const http=require('http');
const url=require('url');
const address='http://www.sian.com/';
function getOptions(address){
  var options=url.parse(address);
  options.headers={'User-Agent':'curl/7.0'};
  return options;
}
function getURL(opt){//递归
  http.get(opt,(res)=>{
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    console.log(res.headers);
    console.log('');
    if(res.statusCode >300 && res.statusCode <400){
      var newAddress=res.headers['location'];
      console.log(newAddress);
        getURL(getOptions(newAddress));
    }else{
      res.pipe(process.stdout);
    }
  });
}
getURL(getOptions(address));













