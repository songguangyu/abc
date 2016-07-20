'use strict';

var base = require('./base.js');

var gc = require('./gc.js');

var dispense = require('./dispense.js');

var middleWare = require('./middleware.js');

var init = require('./init.js');

var controllerBase = require('../controller/base.js');

global.Abc = {};


Abc.Base = base;

Abc.dispense = dispense;


Abc.Object = {};

Abc.middleWare = middleWare;

Abc.Array = [];

Abc.gc = new gc();

Abc.controller = controllerBase;

let libPath = process.cwd()+"/lib";


Abc.path = {
	libPath: libPath,
	config: libPath+'/config',
	middleware: libPath+'/middleware'
};

module.exports = Abc;