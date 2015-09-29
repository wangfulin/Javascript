var util=require("util");

//util.inspect(object,[showHidden],[depth],[colors]);
function Person(){
	this.name="wangfulin";
	
	this.toString=function(){
		return this.name;
	}
}

var obj=new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

//util.isArray()
var arr=[1,2,34];
var arr1=[1,"test",{"t":1}];
var o={};
var s="";
var i=12;
var f=1.4;
console.log("\nisArray:");
console.log(util.isArray(arr));
console.log(util.isArray(arr1));
console.log(util.isArray(o));
console.log(util.isArray(s));
console.log(util.isArray(i));
console.log(util.isArray(f));

//util.isRegExp()
var r=new RegExp("wfl");
var r1=/wfl/;
console.log("\nisRegExp:")
console.log(util.isRegExp(r));
console.log(util.isRegExp(r));
console.log(util.isRegExp(f));

//util.isDate();
var t=new Date();
var h=new Date().getTime();
console.log("\nisDate:");
console.log(util.isDate(t));
console.log(util.isDate(h));

//util.isError();
var err=new Error();
var ef=false;
var es="";
console.log("\nisError:");
console.log(util.isError(err));
console.log(util.isError(ef));
console.log(util.isError(es));

//util.format();
console.log(util.format(1,2,3));
console.log("%%",90,23);
console.log(util.format("%s--%s","wangfulin","handsome"));
console.log(util.format("%s:%d","age",23));
console.log(util.format("%s:%j","json data is :",{"name":"wangfulin","age":23}));

//util.debug();
util.debug("This is util debug!");

//util.log();
util.log("this is a test for util.log()");