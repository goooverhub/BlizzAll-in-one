var app = require('./server')(),
	express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	login = require('./controllers/login'),
	passport = require('./controllers/passport')();

//config express.
app.use(cookieParser());
app.use(session({ secret: 'blizzard',
                  saveUninitialized: true,
                  resave: true }));

app.use(passport.initialize());
app.use(passport.session());

//define default route
app.get('/', function(req, res){
	res.status(200).send('Hello World');;
});
app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    login.blizzCallBack);






