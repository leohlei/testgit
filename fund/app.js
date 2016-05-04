var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.set("views","./views");
app.set("view engine","jade");
app.listen(port);

console.log("the server port " + port);
console.log("the server port " + port);console.log("the server port " + port); 
app.get("/",function(req,res){
	res.render("index",{title:"fund 首页"});
});
app.get("/detail",function(req,res){
	res.render("detail",{title:'fund 详情'});
});
app.get("/admin",function(req,res){
	res.render("admin",{title:'fund 后台页'});
});
