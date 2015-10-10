
exports.blizzCallBack = function(req, res) {
	// console.log(req);
	// res.status(200).send(req);
	req.session.authKey = req.query.code;
	res.redirect('/');
}