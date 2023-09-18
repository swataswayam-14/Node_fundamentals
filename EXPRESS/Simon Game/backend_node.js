const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./index.html');
const homeStyle = fs.readFileSync('./styles.css');
const homeLogic = fs.readFileSync('./game.js');
const homeSoundB = fs.readFileSync('./sounds/blue.mp3');
const homeSoundG = fs.readFileSync('./sounds/green.mp3');
const homeSoundR = fs.readFileSync('./sounds/red.mp3');
const homeSoundY = fs.readFileSync('./sounds/yellow.mp3');
const homeSoundW = fs.readFileSync('./sounds/wrong.mp3');

const server = http.createServer((req,res) =>{
    const url = req.url;
    //home page
    if(url === '/'){
        res.writeHead(200,{'content-head':'text/html'});
        res.write(homePage);
        res.end();
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-head':'text/css'});
        res.write(homeStyle);
        res.end();
    }
    //logic
    else if(url === '/game.js'){
        res.writeHead(200,{'content-head':'text/js'});
        res.write(homeLogic);
        res.end();
    }
    //sounds
    else if(url === '/sounds/blue.mp3'){
        res.writeHead(200,{'content-head':'audio/mpej'});
        res.write(homeSoundB);
        res.end();
    }
    else if(url === '/sounds/wrong.mp3'){
        res.writeHead(200,{'content-head':'audio/mpej'});
        res.write(homeSoundW);
        res.end();
    }
    else if(url === '/sounds/green.mp3'){
        res.writeHead(200,{'content-head':'audio/mpej'});
        res.write(homeSoundG);
        res.end();
    }
    else if(url === '/sounds/yellow.mp3'){
        res.writeHead(200,{'content-head':'audio/mpej'});
        res.write(homeSoundY);
        res.end();
    }
    else if(url === '/sounds/red.mp3'){
        res.writeHead(200,{'content-head':'audio/mpej'});
        res.write(homeSoundR);
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