const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    // res.json([{name : 'Swata Swayam Dash'} , {name : 'paplu'}])//in the method res.json() , we pass an array of 2 objects 
    res.send(`<h1>Home page</h1><a href="~/Desktop/FreeCodeCamp/EXPRESS/public/index.html">HTML page</a>`)
})//404 response --> resource not found

app.listen(5000,()=>{
    console.log(`Server listening on port 5000...`);
})