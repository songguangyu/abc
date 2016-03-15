'use strict';
var fs = require('fs');
var Abc = require('./abc.js');
var C = new (require('./c.js'))();


class Go {
	constructor(app) { //构造函数
        Abc.app = app;
        this.init();
    }

    init() {
    	Abc.app.use(function *(){
			C.init(this);
		});

		Abc.app.listen(3000);
    }
}

module.exports = Go;