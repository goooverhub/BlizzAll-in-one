var request = require('request');

exports.blizzCallBack = function(req, res) {
	req.session.authToken = req.authInfo;
	res.redirect('/');
}