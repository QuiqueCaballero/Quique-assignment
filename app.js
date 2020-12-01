'use strict' 

var express = require('express');
var app = express();

//cargar rutas

//configurar cabeceras http

//cargar rutas bases
app.get('/charts', function(req, res){
	res.status(200).send({message: 'Charts'});
});

module.exports = app;