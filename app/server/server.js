var http = require('http');
	https = require('https'),
	fs = require('fs'),
	path = require('path'),
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

	return app;
}