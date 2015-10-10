var passport = require('passport'),
	BnetStrategy = require('passport-bnet').Strategy,
	BNET_ID = 'dk2gt3fz4qhwfk76kan6p8ueenynev8j',
	BNET_SECRET = 'ra3Xq77xWhnaGKBgK67q3hjNTF7hB6Mw';

module.exports = function(){
	//init passport

	passport.serializeUser(function(user, done) {
	    done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
	    done(null, obj);
	});

	passport.use(new BnetStrategy({
	    clientID: BNET_ID,
	    clientSecret: BNET_SECRET,
	    callbackURL: "https://localhost:8443/auth/bnet/callback"
	}, function(accessToken, refreshToken, profile, done) {
	    return done(null, profile, accessToken);
	}));

	return passport;
}
