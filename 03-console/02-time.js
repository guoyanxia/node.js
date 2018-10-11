#!/usr/bin/node

function f(){
  var n;
  for(var i=0;i<1000;i++){
    for(var j=0;j<1000;j++){
      n=i*j;
    }
  }
  return n;
}
console.time('TEST');
f();
console.timeEnd('TEST');


console.log(f());
