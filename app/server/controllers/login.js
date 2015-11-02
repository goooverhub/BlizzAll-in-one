var request = require('request');
var cookiesParser = require('cookie-parser');
exports.blizzCallBack = function(req, res) {
	res.cookie('battleid', req.user.id);
	res.cookie('battletag', req.user.battletag);
	req.session.authToken = req.authInfo;
	res.redirect('/');
}