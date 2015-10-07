var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var partials=require("express-partials");

var app = express();
var MongoStore=require("connect-mongo");
var settings=require("./settings");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.configure("development",function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	//app.use(express.bodyParser());
	//app.use(express.methodOverride());
	//app.use(express.cookieParser());
	//app.use(express.session({
	//	secret: settings.cookieSecret,
	//	store: new MongoStore({
	//		db: settings.db
	//	})
	//}));
	//app.use(express.router(routes));
	app.use(express.static(__dirname + '/public'));
//});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
//app.use("/hello",routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get("/",routes.index);
app.get("/u/:user",routes.user);
app.post("/post",routes.post);
app.get("/reg",routes.reg);
app.post("/reg",routes.doReg);
app.get("/login",routes.login);
app.post("/login",routes.login);
app.get("/logout",routes.logout);

//添加动态视图助手
/* app.dynamicHelpers({
	user:function(req,res){
		return req.session.user;
	},
	error:function(req,res){
		var err=req.flash("error");
		
		if(err.length){
			return err;
		}else{
			return null;
		}
	},
	success:function(req,res){
		var succ=req.flash("success");
		if(succ.length){
			return succ;
		}else{
			return null;
		}
	}
}); */

//route starts here
//app.get("/hello",routes.hello);

module.exports = app;
