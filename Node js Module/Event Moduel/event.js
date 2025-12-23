const EventEmitter = require("events")
const emiter = new EventEmitter();
emiter.on("say",()=>{
    console.log("hello from emitter")
})
emiter.emit("say")