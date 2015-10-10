var app = require('./server')(),
	express = require('express'),
	path = require('path'),
	login = require('./controllers/login'),
	index = require('./controllers/index');
	path = require('path'),
	passport = require('./controllers/passport')();

//define default route
app.get('/', index.all);

//define oauth login from blizzard
app.get('/auth/bnet',
    passport.authenticate('bnet'));

app.get('/auth/bnet/callback',
    passport.authenticate('bnet', { failureRedirect: '/' }),
    login.blizzCallBack);

app.get('/api/nav', index.nav);
app.get('/api/authKey', index.authKey);

app.get('/test', function(req,res){
	console.log(passport);
	return passport.__code;
});





