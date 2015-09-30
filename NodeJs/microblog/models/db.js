var settings=require("../settings");

var mongodb=require("mongodb");
var Db=mongodb.Db;
var Connection=mongoDb.Connection;
var Server=mongoDb.Server;

module.exports=new Db(settings.db,new Server(settings.host,Connection.DEFAULT_PORT,{}));