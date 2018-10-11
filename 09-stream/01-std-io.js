#!/usr/bin/node
const stdin=process.stdin;
stdin.resume();//开启输入流模式
stdin.setEncoding('utf8');//将输入的数据转换为utf-8编码模式
stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
})

//global.setTimeout(()=>{
 // stdin.removeAllListeners(); 
//},3000);


stdin.on('end',()=>{
    console.log('hello world');
  process.exit();
})





//stdin.pipe(process.stdout);
