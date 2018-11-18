#!/usr/bin/node
const http=require('http');
const url=require('url');
const fs=require('fs');
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
      var html=fs.readFileSync('todo-list-template.html').toString('utf-8');
      //console.log(content);
      var content=items.map(function(item){return '<li>'+ item +'</li>';}).join('\n');
      html=html.replace("%",content)
      res.end(html);
      
      }









