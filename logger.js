import EventEmitter from 'events'
import { v4 as uuidv4 } from 'uuid'

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuidv4(), msg })
    }
}

export default Logger