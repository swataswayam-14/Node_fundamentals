const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const start = async() =>{
    try{
        const first = await readFilePromise('./result3.txt','utf8');
        const second = await readFilePromise('./result.txt','utf8');
        console.log(first,second);
        await writeFilePromise('./result4.txt',`THIS IS AWESOME: ${first} ${second}`,{flag:'a'});
    }catch (error){
        console.log(error);
    }
}

// const getText = (path) =>{
//     return new Promise((resolve , reject) =>{
//         fs.readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }
// getText('./result2.txt').then((result)=> console.log(result)).catch((err)=> console.log(err));

// const start = async() => {
//     try{
//         const first = await getText('./result3.txt');
//         console.log(first);
//     }catch(error){
//         console.log(error);
//     }

// }
// start()