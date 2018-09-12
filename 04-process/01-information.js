#!/usr/bin/node
const g=console.log;
g('arch:',process.arch);
g('plat:',process.platform);
g('id:',process.pid);
g('path:',process.exePath);
g('node version:',process.version);
g('uaer id:',process.getuid());
g('group id:',process.getgid());
g('cwd:',process.cwd());
g('rss:',process.memoryUsage().rss);
g('heapused:',process.memoryUsage().heapUsed);
g('heaptotal:',process.memoryUsage().heapTotal);
g('external:',process.memoryUsage().external);
g('env:'.process.env);
g('host name:',process.env.HOSTNAME);



