var express = require("express");
//var cookieParser = require("cookie-parser");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var cors = require('cors');
var getCurUser = require("./login").getCurUser;
var getUserCatByName =  require("./login").getUserCatByName;
var getProjectsList = require("./list");
app.use(bodyParser.json());
//app.use(express.bodyParser());
// var sessionHandler = require("./js/session_handler");
// var store = sessionHandler.createStore();
//app.use(cookieParser());

//app.use(function (req, res, next) {
//	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200");
//	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//	next();
//});

var originsWhitelist = [
  'http:\/\/localhost:4200', 'http://www.myproductionurl.com'
];
var corsOptions = {
 origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));

var sessionStore={userName:undefined,sessionId:undefined};

app.use(session({
	store: sessionStore.userName,
//	resave: false,
	secret: 'keyboard cat',
//	saveUninitialized: true,
//	cookie: { secure: true, maxAge: 60000 }
}));

// console.log(store)
//app.get('/login', function(req, res){
//    res.sendFile(__dirname + '/login/login-form.html');
//})

app.post('/login',function(req,res){
		console.log("/login has been loaded");
		curUser = getCurUser(req.body.name,req.body.pass);
		if(curUser){sessionStore.userName=curUser.name;
			//sessionStore.sessionId=req.session.id;
			//req.session.uName=curUser.name;
			console.log(curUser);
			//var sessData = req.session;
			//console.log(sessData);
			//sessData.store = curUser.name;
			}
		else {sessionStore.userName="guest"};
		//console.log(req.session.store);
		//req.session.usercat = curUser.cat||"guest";
		//console.log(req.session.id);
		session.uName=curUser.name;
		console.log(session);
		res.send(JSON.stringify(curUser));
		//var list = getProjectsList(curUser.cat);
		//res.send(JSON.stringify(list));
})

app.get('/list', function(req,res){
	var cat = "guest";
	console.log("/list has been loaded");
	console.log(session);
	//console.log(sessionStore.sessionId+" "+req.session.id);
	//console.log(req.session.uName);	
	// console.log(req.session.id,req.session.usercat);
	//console.log("sessionStore: "+sessionStore.userName+" "+sessionStore.sessionId+" "+sessionStore.curSessionId);
	if(sessionStore.userName==session.uName){cat = getUserCatByName(sessionStore.userName);console.log("CAT") }
	//var cat = req.session.usercat || "guest";
	console.log("cat: "+cat);
	var list = getProjectsList(cat);
	res.send(JSON.stringify(list));
})
module.exports = app;
