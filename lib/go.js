'use strict';
var fs = require('fs');
var Abc = require('./abc.js');
var C = new (require('./c.js'))();
var config = require('./config/config.js');

class Go {
	constructor(app) { //构造函数
        Abc.app = app;
        this.init();
    }

    init() {
    	Abc.app.use(function *(){
			C.init(this);
		});

		Abc.app.listen(config.port);
        console.log('服务已经启动：localhost:'+config.port)
    }
}

module.exports = Go;