//built in modules to interact with the OS and Server
//to use external modules we need to first install it and then use it
//NOTE : in node.js we can interact with the file system, that previously we couldn't do
const os = require('os');
const path = require('path');

//info about the user
const user = os.userInfo();
console.log(user);


//the method returns the system running uptime in seconds
console.log(`The system running uptime is ${os.uptime()} seconds`);

//getting usefull data about the operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

//the object returns the platform specific separator
console.log(path.sep);
