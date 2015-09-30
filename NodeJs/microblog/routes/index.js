var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
