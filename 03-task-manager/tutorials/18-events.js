const EventEmitter = require ('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received from ${name} with user id: ${id}` )
})
customEmitter.on('response', () => {
    console.log('hello')
})

customEmitter.emit('response', 'sanchez', 26)


// on- listen for an event
//emit- emit an event