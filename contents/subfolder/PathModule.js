const path = require('path');

const filepath = path.join('contents','subfolder','PathModule.js');
console.log(filepath);//returns the relative path

const base = path.basename(filepath);
console.log(base);//returns the last file present in the file path

const absolute = path.resolve(__dirname,'contents','subfolder','text.txt');
console.log(absolute);//returns the absolute path of the file 