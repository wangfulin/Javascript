var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Display current time */
router.get("/hello",function(req,res,next){
	res.send("The time is "+new Date().toString());
});

/* multi-method */
router.all("/user/:username",function(req,res,next){
	console.log("all methods captured");
	next();
});

/* Show personal website */
router.get("/user/:username",function(req,res,next){
	res.send("user:"+req.params.username);
});

/* Use regexp */
router.get(new RegExp("\/user\/([^\/]+)\/([^\/]+)\/?"),function(req,res,next){
	res.send("params1:"+req.params[0]+" params2:"+req.params[1]);
});

/* List items */
router.get("/list",function(req,res,next){
	res.render("list",{
		title:"List",
		items:[1992,"wangfulin","express","nodejs"]
	});
});

module.exports = router;
