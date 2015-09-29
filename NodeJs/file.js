var fs=require("fs");
var textToWrite="This is text to write to a file";

//新增文件
fs.writeFile("message.txt",textToWrite,function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s saved!");
	}
});


//向文件中添加内容
fs.appendFile("message.txt","\nThis is appended text",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s appended!");
	}
});

//读取文件内容
fs.readFile("message.txt","utf8",function(error,data){
	if(error){
		throw error;
	}else{
		console.log(data);
	}
});

//修改文件名称
fs.rename("message.txt","newmessage.txt",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s renamed!")
	}
});

//查看文件状态
fs.stat("message.txt",function(error,stat){
	if(error){
		throw error;
	}else{
		console.log("It\'s state is :"+stat);
	}
});

//判断文件是否存在
fs.exists("message",function(exists){
	console.log("message exists:"+exists);
});

//删除文件
fs.unlink("newmessage.txt",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s deleted!");
	}
});

//复制文件
function copyFile(src,dest){
	fs.readFile(src,"utf-8",function(error,data){
		if(error){
			throw error;
		}else{
			console.log(data);
			fs.writeFile(dest,data,"utf-8",function(error,data){
				console.log("file saved");
			});
		}
	});
}

copyFile("message.txt","mess.txt");