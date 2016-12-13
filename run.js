'use strict';
var koa = require('koa');
var app = new koa();
var go = require('./lib/go.js');
new go(app);