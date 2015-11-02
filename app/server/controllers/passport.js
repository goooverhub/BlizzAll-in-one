var passport = require('passport'),
	Q = require('q'),
	fs = require('fs'),
	path = require('path'),
	BnetStrategy = require('passport-bnet').Strategy;
	

module.exports = function(){
	//init passport
	var BNET_ID = 'dk2gt3fz4qhwfk76kan6p8ueenynev8j',
		BNET_SECRET = 'ra3Xq77xWhnaGKBgK67q3hjNTF7hB6Mw',
		host = 'localhost',
		protocol = 'https://',
		port ='8443',
		callbackurl = '/auth/bnet/callback';

	passport.serializeUser(function(user, done) {
	    done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	    done(null, obj);
	});

	passport.use(new BnetStrategy({
	    clientID: BNET_ID,
	    clientSecret: BNET_SECRET,
	    callbackURL: protocol+host+':'+port+callbackurl
	}, function(accessToken, refreshToken, profile, done) {
	    return done(null, profile, accessToken);
	}));

	return passport;
}
