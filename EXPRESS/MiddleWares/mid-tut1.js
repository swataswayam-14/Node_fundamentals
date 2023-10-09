const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url , time)
    res.send('Home')
})
//now the problem here is , if we want the same functionality in about , then we have to copy and paste all these codes there also , and what if we have multiple abouts
//A better solution to this problem is we setup a function and the function would contain all these logics and we will attach that function to all our routes


//solution is provided in the next tut file
app.listen(5000,()=>{
    console.log('Server listening on port 5000...')
})