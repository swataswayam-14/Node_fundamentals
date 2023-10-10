const express = require('express');
const app = express();

const logger = (req, res , next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    //res.send('Testing');
    next();//passing it to the next function. 
}//here logger() is a middleware function
//so either you send your own response or you pass it to the next function

app.get('/',logger,(req,res)=>{
    res.send('Home');
})
app.get('/about',logger,(req,res)=>{
    res.send('About Page');
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})

//why are we getting a spinner , like our website is loading??
//as we didn't pass it to the next middleware, whenever we are dealing with middlewares we must pass it to the next middleware.