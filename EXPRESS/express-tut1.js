const { Console } = require('console');
const http = require('http');

//the call back function executes up everytime the user hits the server
const server = http.createServer((req,res)=>{
    console.log('The user hits the browser');
    //issue 1:--> we donot provide any info about the data we are sending , (metadata)
    //issue 2:--> if we type any other GET request , for ex:- /about , /contact or any other page then we are getting the same response
    res.end('Home page');
});

server.listen(5000,()=>{
    console.log('Server listening on port 5000');
});//here 5000 is a port
//port is a communication endpoint