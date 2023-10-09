const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.json(products);//on my frontend , I can grab this data and build some projects
    //res.json([{name: 'Swayam'} , {name: 'Nancy'}]);
});//now we can access the data and build frontend app using this data

app.listen(5000, ()=>{
    console.log('Server listening on port 5000....');
});

