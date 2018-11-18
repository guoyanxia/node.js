#!/usr/bin/node
const http=require('http');
const url=require('url');
const qs=require('querystring');
http.createServer((req,res)=>{
  //console.log(req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'POST':
      add(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'DELETE':
      remove(req,res);
      break;
    default:
      res.end('error');
      break;
      
  }
  }).listen(8080);
var items=[];
function select(req,res){
  var msg=JSON.stringify(items);//得到json数据
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));
  res.end(msg);
}
function remove(req,res){
  if(req.url==='/'){
    items=[];
  }else{
    var id=qs.parse(url.parse(req.url).query).id;
    console.log('id:',id);
    if(id>=0&&id<items.length){
      items.splice(id,1);
      res.end('ok');
    }else{
      res.end('error');
    }
  }
  //res.end("ok");
}
function add(req,res){
  var data='';
  req.on('data',(chunk)=>{
    data+=chunk;
  });
  req.on('end',()=>{
    var item=qs.parse(data).item;
    if(item!=''){items.push(item);}
  })
  //res.end('ok');
}
function update(req,res){
  
  res.end(req.method);
}



