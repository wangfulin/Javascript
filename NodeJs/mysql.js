var mysql=require("mysql");

var conn=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"nodejs",
});

conn.connect();

conn.query("select * from t_user",function(error,rows){
	if(error) throw error;
	console.log("connect success!");
});

var insert=function(conn){
	var values={"id":2,"name":"wangfulin","age":23};
	conn.query("insert into t_user set ?",values,function(error,result){
		//console.log("ID:"+result.insertId);
	});
}

var del=function(conn){
	conn.query("delete from t_user where id=1",function(error,results){
		
	});
}

var update=function(conn){
	var values=["wangfulin1992",2];
	conn.query("update t_user set name=? where id=?",values,function(error,results){
		
	});
}

var select=function(conn){
	conn.query("select * from t_user",function(error,result){
		result.forEach(function(user){
			console.log(user.id+":"+user.name+":"+user.age);
		});
	});
}
insert(conn);
select(conn);
update(conn);
del(conn);
conn.commit();
conn.end();