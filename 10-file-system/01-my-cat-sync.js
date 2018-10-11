#!/usr/bin/node
const fs   = require('fs'),

            file = process.argv[2] || __filename;
            try{//同步读取readFileSync
                console.log(fs.readFileSync(file).toString('utf8'));
            } catch(err) {

                console.error(err.message);

                  process.exit(1);
            }




