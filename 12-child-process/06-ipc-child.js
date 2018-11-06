#!/usr/bin/node
console.log('i am child.pid:',process.pid);
process.send('Child process is start pid:'+process.pid);
process.on('message',(msg)=>{
  console.log('message from father:',msg);

})


