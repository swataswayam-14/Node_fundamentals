const fs = require('fs');

console.log('start');

const first = fs.readFileSync('FSText.txt','utf8');
const second = fs.readFileSync('result.txt','utf8');

fs.writeFileSync('compareResult.txt',`Here is the result ${first},${second}`,{flag: 'a'});
console.log('completed the task');
console.log('starting the new task');

//when we are using synchronious way of reading and writing files , the execution happens synchroniously and at a time it would be diffifcult for multiple users to perform different tasks.