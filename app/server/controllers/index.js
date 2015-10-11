var Q = require('q');
var path = require('path');
var fs = require('fs');
var request = require('request');

exports.all = function(req, res){
	res.render('index.ejs');
}

exports.nav = function(req, res){
	var filePath = path.join(__dirname+'/nav.json');

	function deferedFs(filePath, enc) {
		var deferred = Q.defer();
		fs.readFile(filePath, enc, function(err,data){
			if(err) {
				deferred.reject(err);
			}else {
				deferred.resolve(data);
			}
		});

		return deferred.promise;
	}

	function returnResult(result){
		res.status(200).send(result);
	}

	function parseJson(data){
		return JSON.parse(data);
	}

	return deferedFs(filePath, 'utf8').then(parseJson).then(returnResult);
};


exports.authToken = function(req, res){
	var data = {data: req.session.authToken}
	console.log(data);
	res.status(200).send(data);
};

