#!/usr/bin/node
const mysql=require('mysql');
const con=mysql.createConnection({//创建连接对象
  host:'localhost',
  user:'root',
  password:'199718',
  database:'test'
});
con.connect();

//opteration db
//查询
/*
const sql='select * from books where book_id=?';
con.query(sql,[100],function(err,result){
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(result);
});
*/
//增加
/*
const sql='insert into books(book_id,title,status) values(?,?,?)';
con.query(sql,[2,'node.js',0],function(err,result){
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(result);
});
*/
//修改
/*
const sql='update books set title =? where book_id=?';
con.query(sql,['mysql',2],function(err,result){
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(result);
});
*/

//删除
const sql="delete from books where book_id=?";
con.query(sql,[2],function(err,result){
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(result);
});

con.end();



