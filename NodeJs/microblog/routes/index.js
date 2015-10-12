var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var User = require("../models/user.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	//req.session.user=new User({name:"wangfulin",password:"123"});
	//req.session.success="注册成功";
	res.render('index', { 
		title: '首页'
	});
});

router.get("/reg",function(req,res){
	//req.session.user=new User({name:"wangfulin",password:"123"});
	//req.session.error="注册失败";
	res.render("reg",{
		title:"用户注册"
	});
});


router.post("/reg",function(req,res){
	//res.render('index', { title: '首页' });
	if(req.body["password-repeat"]!=req.body["password"]){
		req.flash("error","两次输入的口令不一致");
		return res.redirect("/reg");
	}
	
	var md5=crypto.createHash("md5");
	var password=md5.update(req.body.password).digest("base64");
	
	var newUser=new User({
		name:req.body.username,
		password:password,
	});
	
	User.get(newUser.name,function(err,user){
		if(user){
			err="Username already exists.";
		}
		if(err){
			req.flash("error",err);
			return res.redirect("/reg");
		}
		
		newUser.save(function(err){
			if(err){
				req.flash("error",err);
				return res.redirect("/reg");
			}
			req.session.user=newUser;
			req.flash("success","注册成功");
			res.redirect("/");
		});
	});
});

router.index=function(req,res){
	res.render("index",{title:"Express"});
}

router.user=function(req,res){
	
}

router.post=function(req,res){
	
}

router.reg=function(req,res){
	
}

router.doReg=function(req,res){
	
}

router.login=function(req,res){
	
}

router.doLogin=function(req,res){
	
}

router.logout=function(req,res){
	
}

module.exports = router;
