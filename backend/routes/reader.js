'use strict'

var express = require('express');
var readerController = require('../Controller/reader');
var api = express.Router();

api.get('/readJson', readerController.readJson);
api.get('/createJson', readerController.readDocument);

module.exports = api;