const events = require('events')
const eventEmitter = new events.eventEmitter()


const chitharDibo=()=>{
    console.log("oi hala koi asos");
}

eventEmitter.on('screem', chitharDibo).chitharDibo

