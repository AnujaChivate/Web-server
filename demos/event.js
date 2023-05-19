import EventEmitter from 'events'

// Create class
class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitter = new MyEmitter()

// Event listener
myEmitter.on('event', () => {
    console.log('Event Fired!')
})

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')