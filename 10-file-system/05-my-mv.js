#!/usr/bin/node
const fa=require('fs');
var src=process.argv[2];
var dst=process.argv[3];
fs.renameSync(src,dst);

