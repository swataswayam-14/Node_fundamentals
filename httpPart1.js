const http = require('http');
//on console logging something on the call back function we donot directly get the info on the console.log, as the server is waiting for a request on port 5000

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('welcome to our home page');
   }
   else if(req.url === '/about'){
    res.end('our company is commited to deliver high quality web applications and build long term relationships with our clients.');
   }
   res.end(
    `<h1>oops</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">Back home `);
   
});
server.listen(5000)//server is listening on port 5000