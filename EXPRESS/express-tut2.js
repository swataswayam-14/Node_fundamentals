//dealing with issue 1:

const { Console } = require('console');
const http = require('http');

//the call back function executes up everytime the user hits the server
const server = http.createServer((req,res)=>{
    console.log('The user hits the browser');   
    //providing the meta data
    //(status code , header)
    //header is specified in terms of key-value pairs

    //ex: 'content-type':'text/html'

    res.writeHead(200,{'content-type':'text/html'});//if we set the content-type to text/plain , then the text is not treated as html , and simply it is rendered as a plain text like '<h1>Home page</h1>'
    res.write('<h1>Home Page</h1>');
    console.log(req);//req is a giant object
    res.end();
});

server.listen(5000,()=>{
    console.log('Server listening on port 5000');
});