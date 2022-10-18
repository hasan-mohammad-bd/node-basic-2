const events = require('events')
const eventEmitter = new events.EventEmitter()


const chitharDibo=()=>{
    console.log("oi hala koi asos");
}

//assign the handler into an event. 

eventEmitter.on('screem', chitharDibo).chitharDibo

//firing the event

eventEmitter.emit('screem')