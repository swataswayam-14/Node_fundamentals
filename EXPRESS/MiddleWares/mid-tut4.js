const express = require('express');
const morgan = require('morgan'); // morgan is a bult in middleware of EXPRESS
const app = express();
app.use(morgan('tiny')); //tiny provides with the most essential data

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})

app.get('/api/products',(req,res)=>{
    console.log(req.user);
    res.send('Products');
})
app.listen(5000, ()=>{
    console.log('Server listening on port 5000....');
})
 