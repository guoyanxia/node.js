#!/usr/bin/node
const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
  if(req.url==='/'&&req.method==='GET'){
    show(req,res,uploadpage);
    return;
  }
  if(req.url !=='/'){
    res.statusCode=404;
    //res.end('error!');
    show(req,res,errpage);
  }else if(req.method !=="POST"){
    res.statusCode=404;
    show(req,res,errpage);
    //res.end('error!');
  }else{
    console.log(`${req.method} ${req.url} Http/${req.httpVersion}`);//起始行
    console.log(req.headers);//请求头
    console.log('');
    //req.pipe(process.stdout);//请求体
    var data='';
    req.setEncoding('binary');//设置文本编码确保流可以读取任何文件
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{

      console.log(data);
      console.log(data.split('\r\n'));
      var das=data.split('\r\n');
      console.log(das[1]);
      var filename=das[1].split(';')[2].split('=')[1];
      filename=filename.slice(1,filename.length-1);
      console.log(das[4]);
      var fileData=das[4];
      console.log("filename:",filename);
      console.log('filedata:',fileData);
      fs.writeFileSync(filename,fileData,"binary");//写文件，在服务器端创建文件


    });
   // res.end('ok');
   show(req,res,backpage);
  }
}).listen(8080);
function show(req,res,page){
  res.statusCode=(page==='errPage'?404:200);
  res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Length', page.length);
  res.end(page);}

const uploadpage='<!DOCTYPE html>'
      + '<html lang="en">'
      + '<head>'
      + '<meta charset="utf-8">'
      + '<title>Upload</title>'
      + '</head>'
      + '<body>'
      + '<h1>Upload file</h1>'
      + '<form method="POST" action="/upload" enctype="multipart/form-data">'
      + '<input type="file" name="filename">'
      + '<input type="submit" value="Upload">'
      + '</form>'
      + '</body>'
      + '</html>';
const backpage= '<!DOCTYPE html>'
      + '<html lang="en">'
      + '<head>'
      + '<meta charset="utf-8">'
      + '<title>Back</title>'
      + '</head>'
      + '<body>'
      + '<h1>ok upload success</h1>'
      + '<a href="/">continue to Upload File</a>'
      + '</body>'
      + '</html>';
const errpage= '<!DOCTYPE html>'
      + '<html lang="en">'
      + '<head>'
      + '<meta charset="utf-8">'
      + '<title>Error</title>'
      + '</head>'
      + '<body>'
      + '<h1>something wrong</h1>'
      + '<a href="/">Back to Upload File</a>'
      + '</body>'
      + '</html>';



          


