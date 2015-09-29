var fs=require("fs");
var textToWrite="This is text to write to a file";

//�����ļ�
fs.writeFile("message.txt",textToWrite,function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s saved!");
	}
});


//���ļ����������
fs.appendFile("message.txt","\nThis is appended text",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s appended!");
	}
});

//��ȡ�ļ�����
fs.readFile("message.txt","utf8",function(error,data){
	if(error){
		throw error;
	}else{
		console.log(data);
	}
});

//�޸��ļ�����
fs.rename("message.txt","newmessage.txt",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s renamed!")
	}
});

//�鿴�ļ�״̬
fs.stat("message.txt",function(error,stat){
	if(error){
		throw error;
	}else{
		console.log("It\'s state is :"+stat);
	}
});

//�ж��ļ��Ƿ����
fs.exists("message",function(exists){
	console.log("message exists:"+exists);
});

//ɾ���ļ�
fs.unlink("newmessage.txt",function(error){
	if(error){
		throw error;
	}else{
		console.log("It\'s deleted!");
	}
});

//�����ļ�
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