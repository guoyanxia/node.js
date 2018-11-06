#!/usr/bin/node
function Bomb(){
  this.message="bomb";
}
var bomb=new Bomb();
Bomb.prototype.explode=function(){
  console.log(this.message);
};
var timeId=setTimeout(bomb.explode.bind(bomb),2000);
// clearTimeout(timeId);

  
  
  
  

