#!/usr/bin/node
const g=console.log,
      arg=process.argv[2];
if(typeof(arg)==='undefined'||arg==='--help'||arg==='-h'){
  help();

}else{
  calc();
}
function help(){
  const msg=' '
    +'usage:cmd-name [OPTION]\n'
    +'evaluate the expression. \n'
    +'\n'
    +'Mandatory arguments to long options are mandatory for short options too.\n'
    +'-h,--help output help information anf exit\n';
  g(msg);
}
function calc(){
  g(arg+'=%s',eval(arg));
}
