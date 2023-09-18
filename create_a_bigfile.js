const fs = require('fs');
for(let i=0; i<100000 ;i++){
    fs.writeFileSync('./result6.txt',`Hello World ${i}\n`,{flag: 'a'});
}