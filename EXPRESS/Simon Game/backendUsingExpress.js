const express = require('express');
const app = express();


app.use(express.static('./public'))//storing all the static files here

app.get('*',(req,res)=>{
    res.status(404).send('Resource not found');
})
app.listen(5000,()=>{
    console.log(`Server listening on port 5000...`);
})