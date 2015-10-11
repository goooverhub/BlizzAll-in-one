var Q = require('q'),
	path = require('path'),
	fs = require('fs');

// var config = JSON.parse(process.env);

var filePath = path.resolve(__dirname, 'ssl/.env');


function readEnv (filePath, enc){
	var deferred = Q.defer();

	fs.readFile(filePath, enc, function (error, text) {
	    if (error) {
	        deferred.reject(error);
	    } else {
	        deferred.resolve(text);
	    }

	});

	return deferred.promise;
}

function parseJson(data) {
	console.log(data);
	var result = JSON.parse(data);
	return result.data;
}

function checkEnv(result) {
	console.log(result);
	if(process.env.appPort){
		process.env.appPort = result.port;
	}
	console.log(result.port);
}


readEnv(filePath, 'utf8').then(parseJson).done(checkEnv);

