const express = require('express');
const app = express();

app.use(express.static('./public'));

//parse form data
app.use(express.urlencoded({extended: false}))


app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.send(`<h1>Welcome ${name}</h1>`);
    }
    res.status(401).send('Please provide your credentials ');
});

app.listen(5000,()=>{
    console.log('server listening on port 5000....');
})