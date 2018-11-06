#!/usr/bin/node
console.log('I am child process.PID:',process.pid);
var timer=global.setInterval(()=>{
  console.log('time:',Date.now());
},1500);
global.setTimeout(()=>{
  global.clearInterval(timer);

  process.exit(1);
},15000);

//process.exit();



