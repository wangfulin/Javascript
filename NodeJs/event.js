var events=require("events");

var emitter=new events.EventEmitter();

emitter.on("someEvent",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});

emitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});


emitter.once("someEvent",function(arg1,arg2){
	console.log("onceEvent",arg1,arg2);
});

emitter.emit("someEvent","wangfulin",1992);
emitter.emit("someEvent","wangfulin",1992);
emitter.emit("error");