

const events  = require("node:events")

const eventEmiter = new events()




eventEmiter.on("data",(obj)=>{
    console.log(obj,'downloaded')
})

eventEmiter.on("data",(instant)=>{
    if(instant=="protect"){
        console.log(`second protact is there`)
    }
})
console.log('Event is occure')
eventEmiter.emit("data","protect")