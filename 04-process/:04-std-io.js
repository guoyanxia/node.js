#!/usr/bin/node
var msg=["name","email","qq","mobile"];
var i=1;
var me={};
const log=console.log();
log(msg[0]);
log(msg[1]);
log(msg[2]);
log(msg[3]);
const stdin=process.stdin;
stdin.on("data",(data)=>{
  eval('me.'+msg[i-1]+'="'+data.slice(0,data.length-1).toString()+'"');
  if(i===4){
      log(me);
      process.exit();
  }
  else{
    log(msg[i++]+":");
  }
})
stdin.on("end",()=>{
  log(me);
})

