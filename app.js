'use strict' 

var express = require('express');
var app = express();

//cargar rutas
var reader_routes = require('./routes/reader');
//configurar cabeceras http

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
});

//cargar rutas bases
app.use('/api', reader_routes);

module.exports = app;