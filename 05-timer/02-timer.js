#!/usr/bin/node
console.log("start-----");
var count=0;
var timeId=setInterval(loop,500);
//重复执行任务次数达到上限后，停止执行
function loop(){
  console.log("我要一直执行");
  if((count++)==10){
    global.clearInterval(timeId);
  }
}
//执行一定时间后停止执行
global.setTimeout(()=>{
  console.log("end");
  global.clearInterval(timeId);
},500);







