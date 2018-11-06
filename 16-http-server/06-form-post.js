#!/usr/bin/node
const http=require('http');
const url=require('url');
const qs=require('querystring');
var items=[];
http.createServer((req,res)=>{
  console.log(`${req.method} ${req.url} Http${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  if(req.url==='/'&&req.method==='GET'){//只渲染页面
    show(req,res);
  }else if(req.url==='/'&&req.method==='POST'){
    var data='';
    req.on('data',(chunk)=>{//添加事项时重新渲染页面
      data+=chunk;
    });
    req.on('end',()=>{
      var list=qs.parse(data);
      if(list.item!==''){items.push(list.item);
        show(req,res);}
    });
  }else{
    res.statusCode=404;
    res.end('error');
  }
}).listen(8080);
    function show(req,res){
      var html='<!DOCTYPE html>\n'

              + '<html>\n'

              + '  <head>\n'

              + '    <meta charset="UTF-8">\n'

              + '    <title>Todo list</title>\n'

              + '  </head>\n'

              + '  <body>\n'

              + '    <h1>Todo List</h1>\n'

              + '    <ul>\n'

              + items.map(function(item) {return '<li>' + item +'</li>';}).join('\n')

              + '    </ul>\n'

               + '<form method="POST" action="/">\n'

              + '<p><input type="text" name="item" />'

                                                                                  
              + ' <input type="submit" value="Add Item" /></p>\n'

              + '    </form>\n'

              + '  </body>\n'

              + '</html>';
    res.end(html);
  }









