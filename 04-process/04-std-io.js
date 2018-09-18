#!/usr/bin/node
var me = {}, i = 1;

var msg = ['Name', 'Email', 'QQ', 'Mobile'];

console.log(msg[0]+":");
console.log(msg[1]+":");
console.log(msg[2] + ':');
console.log(msg[3] + ':');
 const stdin = process.stdin;
 stdin.on('data',(data) => {
       eval('me.' + msg[i-1] + '= "' + data.slice(0, data.length-1).toString() + '"');
        if(i === 4) {
            console.log(me);
            process.exit();
            
            }
        else {

              console.log(msg[i++] + ':');

                        
                }
            });
stdin.on('end', () => {

    console.log(me);}
   );







