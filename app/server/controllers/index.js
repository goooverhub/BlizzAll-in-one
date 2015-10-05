var Q = require('q');
var path = require('path');
var fs = require('fs');

exports.all = function(req, res){
	res.render('index.ejs');
}

exports.nav = function(req, res){
	var filePath = path.join(__dirname+'/nav.json');

	function returnResult(result){
		res.status(200).send(result);
	}

	function parseJson(data){
		return JSON.parse(data);
	}

	function getJsonContent(){
		return fs.readFileSync(filePath);
	}

	return Q.fcall(getJsonContent).then(parseJson).then(returnResult);
};