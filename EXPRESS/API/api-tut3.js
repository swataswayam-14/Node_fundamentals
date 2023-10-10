const express = require('express');
const app = express();
let {people} = require('./data');

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name) {
        res.send(200).send(`Welcome ${name}`)
    }
    res.status(200).send('please provide credentials')
})

app.put('/api/people/:id',(req,res) =>{
    const{id} = req.params
    const{name} = req.body
    console.log(id, name)
    res.send('hey there you got the right name')
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000...');
})