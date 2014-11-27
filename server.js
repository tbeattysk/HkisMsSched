var express = require('express');
var apiKey	= require('./apiKey')
var app 	= express();
var Parse 	= require('parse').Parse;
var morgan 	= require('morgan');		//Log requrests to console
var bodyParser = require('body-parser'); // parse pulls
var methodOverride = require('method-override'); //simulate delete - put

//configure ==========

Parse .initialize(apiKey.appID,apiKey.jsKey);

app.use(express.static(_dirname + '/public'));		// set the static files location /public/img will be /img for users

app.use(morgan('dev')); 							// log requests to console

app.use(bodyParser.urlencoded({'extended':'true'}));	// parse application/x-www-form-urlencoded

app.use(bodyParser.json());							//parse json

app.use(bodyParser.json({ type: 'application/vnd.api+json'}));	//parse files

app.use(methodOverrride());

app.listen(8080);
console.log("App listening on port 8080"):