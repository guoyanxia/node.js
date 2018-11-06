#!/usr/bin/node
const cp=require('child_process');
console.log('i am father.pid:',process.pid);
var cmd=cp.fork('./06-ipc-child.js');
global.setTimeout(()=>{
  
  cmd.send('i am father.pid:'+process.pid);
},3000);

cmd.on('message',(msg)=>{
  console.log('child-msg:',msg);
})
