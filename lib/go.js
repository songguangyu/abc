'use strict';
var fs = require('fs');
var Abc = require('./core/abc.js');
var C = new (require('./core/c.js'))();
var config = require('./config/config.js');
var colors = require('colors');  


class Go {
	constructor(app) { //构造函数
        Abc.app = app;
        this.init();
    }

    init() {
        //执行中间件
    	Abc.app.use(function *(next){
            this.http = {};
            let instance = new Abc.middleWare();
            var start = new Date;
            yield instance.init(this, next);
            var ms = new Date - start;
            console.log("运行中间件花费"+colors.green(ms+"ms"));
            yield next;
		});

        Abc.app.use(function *(next){
            if(this.http.action || this.http.controller) {
                let cwd = process.cwd();
                if(this.http.controller) {
                    var controller = "/"+this.http.controller;
                } else {
                    var controller = "/index";
                }
                if(this.http.action) {
                    var action = "/"+this.http.action;
                }

                let file = require(cwd+"/controller"+controller+"Action.js");
                let instance = new file(this);
                instance[this.http.action]();
            }
           
        });

		Abc.app.listen(config.port);
        let str = '服务已经启动：localhost:'+config.port;
        console.log(str.green)
    }
}

module.exports = Go;