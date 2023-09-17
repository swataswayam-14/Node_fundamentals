const fs = require('fs');

console.log('start');

fs.readFile('result.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
        const first = result;
        console.log("done with reading the result.txt file");

    fs.readFile('resultAsync.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile('AsyncResult.txt',`here is the result ${first}, ${second}`,(err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Done with the task');
        });
    });
});
console.log("starting the next task");

//its advantsges:--> when an user comes here and wants to get this functionality , node offers the task and the application can go on serving other user task