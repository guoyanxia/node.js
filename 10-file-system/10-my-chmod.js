
#!/usr/bin/node
const fs=require('fs');
var file=process.argv[2];
var mod=process.argv[3];
fs.chmodSync(file,mod);



