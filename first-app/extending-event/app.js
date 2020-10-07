const EventEmitter = require('events');
// const emitter = new EventEmitter();



const Logger = require('../logger');
const logger = new Logger();

logger.on('messageLogged',function(arg){//e, eventArg
    console.log('Listener called', arg);
});
logger.log('message');

