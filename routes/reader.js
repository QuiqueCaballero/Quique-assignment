'use strict'

var express = require('express');
var readerController = require('../Controller/reader');
var api = express.Router();

api.get('/charts', readerController.readDocument);

module.exports = api;