const EventEmmitter = require('events'); 

const eventEmmitter = new EventEmmitter(); 

eventEmmitter.on('onThisEmmitter', ()=>{
    console.log('Emmitter is triggered!');
})

eventEmmitter.emit('onThisEmmitter'); 

// asynchronous emmitter

class Person extends EventEmmitter{
    constructor(name){
        super(); 
        this._name = name; 
    }

    get name(){
        return this._name; 
    }
}

let mk = new Person('mk'); 
let ms = new Person('ms')

mk.on('name', ()=>{
    console.log(mk.name);
})

mk.emit('name'); 

ms.on('name', ()=>{
    console.log(ms.name);
})

ms.emit('name'); 