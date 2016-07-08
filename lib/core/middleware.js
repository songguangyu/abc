'use strict';

var base = require('./base.js');
var co  =require('co');

class MiddleWare{
	constructor(context) { //构造函数
        //this.init(context);
    }

    init(context, next) {
    	//顺序执行中间件
    	let middlewareConfig  = require(Abc.path.config+"/middleware.js");
        var middlewareArray = [];
    	for(let items in middlewareConfig) {
    		if(middlewareConfig[items].length !== 0) {
                for(let item of middlewareConfig[items]) {
                    let middleware = require(Abc.path.middleware+'/'+item+'.js');
                    let instance = new middleware();
                    middlewareArray.push(co.wrap(instance.run).bind(instance)(context, next));
                }
    		}
    	}
        return Promise.all(middlewareArray);
    } 
}

module.exports = MiddleWare;