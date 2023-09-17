const EventEmitter = require('events');

const customEmitter = new EventEmitter();
//we can emit our events and have as many functions we want here that are listening to the event and do some logic:
customEmitter.on('response',()=>{
    console.log('data recieved');
});
customEmitter.on('response',()=>{
    console.log('some other logic here');
});
//this order matters , i.e. we first listen for the event and then we emit it
customEmitter.emit('response');

//if we place the emit above on , it doesnot make any sense as we are listening to an event that is already emitted
