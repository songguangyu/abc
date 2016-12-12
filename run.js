'use strict';
var koa = require('koa');
var app = koa();
var go = require('./lib/go.js');
new go(app);