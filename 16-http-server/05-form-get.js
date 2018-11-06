#!/usr/bin/node
const http=require('http');
const url=require('url');
const qs=require('querystring');
var items=[];
http.createServer((req,res)=>{
  if(url.parse(req.url).pathname==='/'&&req.method=='GET'){
    console.log(`${req.method} ${req.url} Http/${req.httpVersion}`);//起始行
    console.log(req.headers);//请求头
    console.log('');
    //req.pipe(process.stdout);//请求体
    var data=qs.parse(url.parse(req.url).query);//将url解析成对象的形式
    if(typeof(data.item)!=='undefined')items.push(data.item);
    var html='<!DOCTYPE html>\n'

  + '<html>\n'

  + ' <head>\n'

              + '<meta charset="UTF-8">\n'

              + ' <title>Todo list</title>\n'

              + ' </head>\n'

              + ' <body>\n'

              + ' <h1>Todo List</h1>\n'

              + ' <ul>\n'

              + items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')

              + ' </ul>\n'

              + ' <form method="GET" action="/">\n'
                                                                          

              + ' <p><input type="text" name="item" />'

              + ' <input type="submit" value="Add Item" /></p>\n'

              + ' </form>\n'

              + '  </body>\n'

              + '</html>';
    res.end(html);
  }else{
    res.statusCode=404;
    res.end('error');
  }
}).listen(8080);










