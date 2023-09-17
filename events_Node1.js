const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(name ,id)=>{//in the call back function we can access the arguments as parameters here it is 'name' and 'id'
    console.log(`data recieved having name: ${name} with id: ${id}`);
});
customEmitter.on('response',()=>{
    console.log('some other logic here');
});

customEmitter.emit('response','swayam',14);//we can also pass arguments when we are emitting the event