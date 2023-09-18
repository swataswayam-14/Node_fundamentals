var http = require('http');
var fs = require('fs');

http
.createServer(function(req,res){
    // const text = fs.readFileSync('./result6.txt','utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./result6.txt','utf8');
    fileStream.on('open',() =>{
       //pipe pushes from the read stream to the write stream
    //if we can read data in chunks then we can write data in chunks
    //response object can be setup as a writable string
    fileStream.pipe(res);
    });
    fileStream.on('error',(err)=>{
        res.end(err);
    });
    //here the Transfer-Encoding: chunked
})
.listen(5000);