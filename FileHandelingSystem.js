const fs = require('fs');

const first = fs.readFileSync('./contents/FSText.txt','utf-8');
const second = fs.readFileSync('./contents/FSText.txt','utf-8');

fs.writeFileSync('result.txt',`It is what it is ${first},${second} yeah `);//this will override the file
fs.writeFileSync('result.txt',`so this is the appended text added to the file `,{flag:'a'});//this will append the file and not override it
