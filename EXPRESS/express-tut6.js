const express = require('express');
const path = require('path');
const app = express();

//setup static and middleware
app.use(express.static('./public'))//static files are those files which the server doesnot have to change , examples of static files include : images , styles , javascript , text , html , sounds etc

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./index.html'));
//  adding to static assets
//  SSR (server side rendering) ->use of template engine
// })
app.get('*',(req,res)=>{
    res.status(404).send('Resource not found');
})
//we didn't had to set up the statuses , content types etc, express takes care of it all 

app.listen(5000,()=>{
    console.log(`server listening on port 5000`);
})

