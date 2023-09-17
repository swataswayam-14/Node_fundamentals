const http = require('http');

//everytime the request comes in , we invoke the call back and then we send back the hello world
const server = http.createServer((req,res) =>{
    console.log('request event');
    res.end('Hello World');

});

server.listen(5000, () =>{
    console.log('server listening on port : 5000.....');
});
//in listen :-->
//event loop is waiting for the request to come in and once they come in we run our call back.