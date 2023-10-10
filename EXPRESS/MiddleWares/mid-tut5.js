const express = require('express');
const app = express();
let {people} = require('../API/data');

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data: people});
})


app.listen(5000,()=>{
    console.log('server listening on port 5000...');
})
