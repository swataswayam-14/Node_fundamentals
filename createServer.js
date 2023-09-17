const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    //blocking code --> synchronous code that takes a long time
    for(let i=0 ;i<1000;i++){
        for(let j=0 ;j<1000 ;j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('About Page');
  } else {
    return res.statusCode(404).end(`<h1>Oops</h1>
        <p>The page you are requesting is not present</p>
        <a href='/'>Go Back</a>`
    );
  }
});

server.listen(5000, () => {
  console.log('server is listening on port 5000');
});