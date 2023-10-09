const express = require('express');
const app = express();

const logger = (req, res , next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    //res.send('Testing');
    next();
}//here logger() is a middleware function

app.get('/',logger,(req,res)=>{
    res.send('Home');
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})

//why are we getting a spinner , like our website is loading??
//as we didn't pass it to the next middleware, whenever we are dealing with middlewares we must pass it to the next middleware.