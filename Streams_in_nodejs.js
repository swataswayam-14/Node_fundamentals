//streams are used to read / write sequencially
//when we have to handel or manipulate streaming data , streams comes in real handy
//four different types of streams:

/*
1. Writeable : used to write data sequentially
2. Readable :  used to read data sequentially
3. Duplex:  used to both read and write data sequentially.
4.Transform : here data can be modified while writing or reading.
 */
//streams extends events emitter class

//when file sizes are too big then we will get an error as we cannot place that entire file contents in a single variable string
//the solution to the above problem is by using read stream option

const fs = require('fs');

const stream = fs.createReadStream('./result6.txt',{highWaterMark: 90000, encoding: 'utf8'});

stream.on('data',(result) =>{
    console.log(result);
})
// Here we are reading data in chunks ,  by default that chunk is 64KB.
//so instead of reading everything and placing that in a variable , we are doing that in chunks. we are using an event and that event is 'data'

//highWaterMark (options object): looks for the property that controls the size of the buffer 

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./result.txt',{highWaterMark : 90000})
//const stream = createReadStream('../result.txt',{encoding: 'utf8'})

stream.on('error',(err)=>{
    console.log(err);
});//check it by providing a wrong file path