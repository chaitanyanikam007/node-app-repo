const os = require("os");

console.log("this is my first app");

//Global Objects
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);
console.log(`Module is: ${module}`);
console.log(`Global is: ${global}`);
console.log(`Console is: ${console}`);
console.log(`process is: ${process}`);

//OS modules
console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`Cpus: ${os.cpus()}`);
console.log(`freemem: ${os.freemem()}`);
console.log(`Totalmem: ${os.totalmem()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(os.type());
console.log(`Uptime: ${os.uptime()}`);
console.log(`UserInfo: ${os.userInfo()}`);