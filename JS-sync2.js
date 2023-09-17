//here javascript will execute the first task , then the next task and lastly the second task

console.log('first task');
setTimeout(() =>{
    console.log('second task');
},0); //here 0 is the waiting seconds for the call back function to execute
console.log('next task');

//this way we can offload the time consuming operation to the browser
//browser does provide some APIs where we don't have to write the blocking code