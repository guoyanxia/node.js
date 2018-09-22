#!/usr/bin/node
if(process.argv.length !== 3) {
    console.error('命令行格式：cmd base64_string');
      process.exit(1);
}
const buf = new Buffer(process.argv[2], 'base64');
const data = buf.toString('utf8').split(':');
if(data.length !== 2) {
    console.error('信息有误！');
      process.exit(2);
}
console.log('user name: %s\npassword: %s', data[0], data[1]);



