const EventEmiter = require("events");

class Event extends EventEmiter {
    log() {
        this.on("messageLogged", function() {
            console.log(true)
        })
    }

    
}


module.exports = Logger