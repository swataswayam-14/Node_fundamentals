const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/api/products',(req,res) =>{
    const newProducts = product.map((product) =>{
        const{id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})
//now we are getting a collection and we are sending selective items


//to get a single product

app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=> product.id === 1)
    res.json(singleProduct)
})
//what if we have 100, 200 or 1000 products , hence this method simply won't work

//instead of hard cording this /1 , /2 etc...we set up a route parameter
//ex-> /:productID --> it is a route parameter
//below is the code for it:

app.get('./api/products/:productID',(req,res) =>{
    const {productID} = req.params;

    const singleProduct = product.find((product) => product.id === Number(productID))//as it is a string hence we had to convert it to number type
    
    //by these lines of code we can access any of the product

    //A case where the user requests a product that doesnot exists then that can be solved by a if statement
    if(!singleProduct){
        res.status(400).send('Product doesnot exists');
    }
    return res.json(singleProduct)
})

app.get('./api/products/:productID/reviews/:reviewID',(req,res)=>{
    res.send(`<h1>Hello World</h1>`);
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})