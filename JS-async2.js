setInterval(() =>{
    console.log('hello world');
},2000);//every 2 secs the event loop will evoke the call back
console.log('I will run first');
//This is asynchronous
//every time we will be having some synchronous actions , that will be offloaded and then when its time we invoke the call back