const express = require('express');
const app = express(); //same as const server = http.createServer()

//const app = require('express')(); --> does the same thing as the above two lines of code

app.listen(5000,() =>{
    console.log('server listening on port 5000'); //this is a call back function. when we instantiate the server , this function gets called
});
//its a good practice to add the status code 
//that will make more sense of what is sent back to the browser

app.get('/',(req,res) =>{ //get(path that the user is requesting , call back function)
    //the call back function will be invoked everytime the user performs a get request on our domain
//two values passed --> request and response
    console.log('The user hit the Home page');
    res.status(200).send('Home Page');
});

app.get('/about',(req,res) =>{
    res.status(200).send('About Page');
});
//status code 200 --> means that the request was successful

//handeling the 404:-->
app.get('*',(req,res)=>{
    res.status(404).send('Resource not found');
});//this is our own way to handel the 404 error. Its optional
//status code - 404

/*
app.get --> Read Data
app.post -->Insert Data
app.put --> Update Data
app.delete --> Delete Data
//above is what the user want to do with the data 

app.all--> handels all the http verbs
app.use
app.listen
*/