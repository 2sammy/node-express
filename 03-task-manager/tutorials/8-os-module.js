//os module- operating system
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

// return the current OS

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os. freemem()
}
 console.log(currentOS)