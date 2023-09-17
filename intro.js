//globals -- > no window !! -- because there is no browser and hence no window object

//global variable : - anywhere in the application we can access them

// __dirname - path to current directory
// __filename - file name
// require - function to use module (CommonJS)
//module - info about current modules (file)
//process - info about environment where the program is being executed

console.log(__dirname);
console.log(process);

console.log(__filename);

setInterval(()=>{//hello world is printed in every second interval
    console.log('Hello World');
},1000);
