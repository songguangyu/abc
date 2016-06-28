'use strict';
var fs = require('fs');
var Abc = require('./abc.js');
var C = new (require('./c.js'))();
var config = require('./config/config.js');
var colors = require('colors');  


class Go {
	constructor(app) { //构造函数
        Abc.app = app;
        this.init();
    }

    init() {

        //new Abc.middleWare(this);

    	Abc.app.use(function *(next){
            let instance = new Abc.middleWare();
            instance.init(this);
            //this.body = "aaaa";
            //C.init(this);
		});

		Abc.app.listen(config.port);
        let str = '服务已经启动：localhost:'+config.port;
        console.log(str.green)
    }
}

module.exports = Go;