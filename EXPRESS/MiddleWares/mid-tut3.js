const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');//authorise middleware will check the query string parameter and if they match then the authorization of the user is successful
const middleware = require('./middleware');//this is only applied when the user goes to route api/products

//the order matters as where you place the app.use() 
//in express everything goes in order

//so we will have our middleware functions first and then we will have our route methods
//app.use(logger); //app.use('/api',logger) --> it will get applied to any route after /api , ex: /api/home/products , /api/huse/ula etc , if we donot provide any path then the middleware will be applied to every route

app.use([logger,authorize]);//this is how we use multiple middlewares
//they will be executed in the order they are passed.

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.get('/api/products',middleware,(req,res)=>{
    console.log(req.user);
    res.send('Products');
})
app.listen(5000, ()=>{
    console.log('Server listening on port 5000....');
})
 