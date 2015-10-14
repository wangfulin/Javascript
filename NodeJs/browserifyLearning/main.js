var foo=require("foo");
foo(5);
var arr=foo.arr;
var outputstr="";
for(var i=0;i<arr.length;i++){
	outputstr+=arr[i]+" ";
}
console.log(outputstr);