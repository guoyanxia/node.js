
#!/usr/bin/node
const fs=require('fs');
var dst=process.argv[2];
console.log(fs.readlinkSync(dst));







