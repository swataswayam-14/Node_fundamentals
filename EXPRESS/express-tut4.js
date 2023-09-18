const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index-tut4.html');//The reason why the readFileSync is used here : before that the note is : we are not invoking this whenever someone hits the server, we require that file when we instantiate our server
const server = http.createServer((req,res) =>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-head':'text/html'});
        res.write(homePage);
        res.end();
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-head':'text/html'});
        res.write('<h1>About page</h1>');
        res.end();
    }
    //404 - page not found
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});
server.listen(5000);