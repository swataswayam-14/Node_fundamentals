//a more meaningfull way of sending the datas, is we donot send the entire data , we only send specific datas that are required , example in an e-commerce website , if a user navigates to a product , the data that will be sent is only the product name , description , specification, id and price and not send each and every datas that we have about this product

const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1> Home Page </h1><a href = "api/products">Products</a> <a href="/api/products/1">Product 1</a><a href="/api/products/1">Product </a>');
});

app.get('/api/products',(req,res) =>{
    const newProducts = products.map((product) => {
        const{id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);//here we are being selective what we are sending back
})

app.get('/api/products/1' , (req,res) =>{
    const singleProduct = products.find((product)=> product.id === 1)
    res.json(singleProduct);
})

// the problem comes when we have 100, 200s of products , instead of hardcoding this 1 , 2 , 3 for different products , we setup a route parameter /:productID 

app.get('/api/products/:productID' , (req,res) =>{
    const {productID} = req.params;//its is a string
    console.log(req.params);
    const singleProduct = products.find((product) => product.id === Number(productID));
    //if condition if in case the user types some url of which a product doesnot exists
    if(!singleProduct){
        return res.status(404).send('Product does not exists');
    }

    return res.json(singleProduct);
})

//get parameters can be complex
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello World');
});

app.listen(5000, ()=>{
    console.log('Server listening on port 5000....');
});