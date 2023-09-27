const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('Welcome');
// });

//using event emitter API
const server = http.createServer();
//emits request event
//subscribe to it / listen for it /  respond to it
server.on('request',(req,res) =>{
    res.end('Welcome');
});//behind the scenes the server emits the request event and then we may listen for it ,subscribe it etc...
server.listen(5000);