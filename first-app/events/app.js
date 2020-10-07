const EventEmitter = require('events');
const emitter = new EventEmitter();
//register a listener
emitter.on('messageLogged',function(arg){//e, eventArg
    console.log('Listener called', arg);
});
emitter.on('testemitter',function(){
    console.log('just called');
});
emitter.on('testLogging',(arg) => {
    console.log('logging success, and id is',arg.id, 'pass is',arg.pass);
});
//raise an evnet
emitter.emit('messageLogged',{id: 1, url: 'http://'});
emitter.emit('testemitter');
emitter.emit('testLogging', {id: 'leminh123', pass: 12345} )
//make a noise , produce