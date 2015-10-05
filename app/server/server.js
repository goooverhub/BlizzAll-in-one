var http = require('http');
	https = require('https'),
	fs = require('fs'),
	path = require('path'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	passport = require('./controllers/passport')();
	express = require('express');


module.exports = function() {
	var app = express();

	var credentialPath = path.resolve(__dirname, '../../ssl/');
	var httpsCredential = {
		key: fs.readFileSync(credentialPath + '/server.key'),
		cert: fs.readFileSync(credentialPath + '/server.crt'),
		ca: fs.readFileSync(credentialPath + '/ca.crt'),
		requestCert: true,
		rejectUnauthorized: false
	};

	var httpServer = http.createServer(app).listen(3000);
	var httpsServer = https.createServer(httpsCredential, app).listen(8443);

	//config express
	//set up view engine
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');
	app.set('views', path.resolve(__dirname, '../client'));

	//assign session to users.
	app.use(cookieParser());
	app.use(session({ secret: 'blizzard',
	                  saveUninitialized: true,
	                  resave: true }));
	app.use(passport.initialize());
	app.use(passport.session());

	//allow express access to static files under client folder
	app.use(express.static(path.resolve(__dirname,'../client')));

	//return app.
	return app;
}