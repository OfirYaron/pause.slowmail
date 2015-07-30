/**
 * Created by ofir.yaron on 29/7/2015.
 */

var http = require('http');
var express = require('express');
var app = express();

app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
   res.render("write", {title:"Write your letter"});
});
app.get("/read",function(req,res){
   res.render("read", {title:"You've received a letter"});
});

var server = http.createServer(app);
var port = process.env.PORT || 5000;
server.listen(port, function() {
   console.log("Listening on " + port);
});
