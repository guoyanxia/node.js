#!/usr/bin/node
const http=require('http');
const cheerio=require('cheerio')
const url=require('url');
var address='http://edu.51cto.com/courselist/index-zh5-p1.html';
http.get(address,(res)=>{//请求体
  var html='' ; 
  res.on('data',(data)=>{
    html+=data;
  });
  res.on('end',()=>{
    console.log(html);
    var $=cheerio.load(html);
    $('body').find('div.main').each(function(){
      var cName=$(this).find('a').text();
      var cTime=$(this).find('p.f1').text();
      var cTarget=$(this).find('div.course_target').text();
      var cURL=$(this).find('a').attr('href');
      if(cTime==''){
        return;
      }
      console.log('课程名称：',cName.trim());//trim()可以消除多余空格，使得排序整齐
      console.log('课程时长：',cTime.trim());
      console.log('课程目标：',cTarget.trim());
      console.log('课程地址：',cURL.trim());
      console.log('');
    });
  });
});












