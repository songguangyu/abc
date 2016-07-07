'use strict';

var C = require('./c.js');

var middleWare = require('./middleware.js');

global.Abc = {};

Abc.C = C;

Abc.Object = {};

Abc.middleWare = middleWare;

Abc.Array = [];

let cpath = __dirname;


Abc.path = {
	config: cpath+'/config',
	middleware: cpath+'/middleware'
};

module.exports = Abc;