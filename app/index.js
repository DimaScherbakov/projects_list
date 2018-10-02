var express = require("express");
// var cookieParser = require("cookie-parser");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var getCurUser = require("./login");
var getProjectsList = require("./list");
app.use(bodyParser.json());
// app.use(express.bodyParser());
// var sessionHandler = require("./js/session_handler");
// var store = sessionHandler.createStore();
// app.use(cookieParser());

var store;
app.use(session({
	store: store,
	resave: false,
	saveUninitialized: true,
	secret: "dimadima"
}));
// console.log(store)
app.get('/login', function(req, res){
    res.sendFile(__dirname + '/login/login-form.html');
})

app.post('/login',function(req,res){
		curUser = getCurUser(req.body.name);
		store = req.session.id;
		req.session.usercat = curUser.cat;
		var list = getProjectsList(curUser.cat);
		res.send(JSON.stringify(list));
})	

app.use('/', function(req,res){
	// console.log(req.session.id,req.session.usercat);
	var cat = req.session.usercat || "guest";
	// console.log(cat);
	var list = getProjectsList(cat);
	res.send(JSON.stringify(list));
})
module.exports = app;