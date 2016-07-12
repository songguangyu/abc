'use strict';
var fs = require('fs');
var Abc = require('./core/abc.js');
var config = require('./config/config.js');
var colors = require('colors');  
var init = require('./core/init.js');

class Go {
	constructor(app) { //构造函数
        Abc.app = app;
        new init();
        this.go();
    }

    go() {
        //执行中间件
    	Abc.app.use(function *(next){
            this.http = {};
            let instance = new Abc.middleWare();
            var start = new Date;
            yield instance.init(this, next);
            var ms = new Date - start;
            yield next;
            console.log("请求共花费"+colors.green(ms+"ms"));
		});

        Abc.app.use(function *(next){
            new Abc.dispense(this);
            yield next;
        });

        //请求结束后，gc删除临时数据
        Abc.app.use(function *(next){
           Abc.gc.init(this);
        })

		Abc.app.listen(config.port);
        let str = '服务已经启动：localhost:'+config.port;
        console.log(str.green);
    }
}

module.exports = Go;