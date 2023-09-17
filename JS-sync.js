console.log('first task');
console.time();
for(let i = 0; i<10000000 ;i++){
    console.log('doing....');
}
console.timeEnd();
console.log('next task');