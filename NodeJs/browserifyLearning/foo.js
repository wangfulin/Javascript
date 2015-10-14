var foo=function foo(n){
	console.log("This is foo saying:"+n);
}
module.exports=foo;

var numbers=[];
for(var i=0;i<100;i++) numbers.push(i+1);
module.exports.arr=numbers;