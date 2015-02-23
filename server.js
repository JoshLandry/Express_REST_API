'use strict';
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');

mongoose.connect('mongodb://localhost/goatsapp_development');

var app = express();
var goatsRouter = express.Router();

routes(goatsRouter);

app.use('/api/v1', goatsRouter);

app.listen(3000, function () {
	console.log('server listening on port ' + 3000);
});