'use strict';

var C = require('./c.js');

var middleWare = require('./middleware.js');

global.Abc = {};

Abc.C = C;

Abc.Object = {};

Abc.middleWare = middleWare;

Abc.Array = [];

let libPath = process.cwd()+"/lib";


Abc.path = {
	libPath: libPath,
	config: libPath+'/config',
	middleware: libPath+'/middleware'
};

module.exports = Abc;