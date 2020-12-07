'use strict'

var fs = require('fs');
var lineReader = require('line-reader');

function readDocument(req, res){
	var text = '';
	var petition = [];
	var count = 0;

	lineReader.eachLine('/home/mortixmix/enrique-assignment/backend/resources/epa-http.txt', function(line) {

	    var array = line.split(" ");
	    var request = arrayToJson(array);
	    petition.push(request);
	    count++;

	}, function (err) {
	  if (err) throw err;

	  fs.writeFile("/home/mortixmix/enrique-assignment/backend/resources/data.json", JSON.stringify(petition), function(error){
	  	if (err) throw err;
	  	console.log ("complete!! Number of lines: "+count);
	  })
	});
}

function readJson(req, res){

	var obj = JSON.parse(fs.readFileSync('./resources/data.json', 'utf8'));
	return res.status(200).send(obj);
}

function arrayToJson(array){
	var datetime = array[1].substring(1,array[1].length-1).split(":");
	var protocol = array[4].substring(0,array[4].length-1).split("/");
	var request = {
		method: array[2].substring(1, array[2].length),
		url: array[3],
		protocol: protocol[0],
		protocol_version: protocol[1] 
	};  
	var record = {
		host: array[0],
		datetime: {
			day: datetime[0],
			hour: datetime[1],
			minute: datetime[2],
			second: datetime[3]
		},
		request: request,
		response_code: array[5],
		document_size: array[6]
	};
	return record;
}


module.exports = {
	readDocument,
	readJson
};