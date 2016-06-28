'use strict';

var base = require('./base.js');
var co  =require('co');

class MiddleWare{
	constructor(context) { //构造函数
        //this.init(context);
    }

    init(context) {
    	//顺序执行中间件
    	let middlewareConfig  = require(Abc.path.config+"/middleware.js");

    	for(let item in middlewareConfig) {
    		if(middlewareConfig[item].length !== 0) {
    			middlewareConfig[item].forEach((item)=>{
	    			let middleware = require(Abc.path.middleware+'/'+item+".js");
                    let instance = new middleware();
	    			let fn = co.wrap(instance.run);
                    fn.call(instance, context);
	    		})
    		}
    	}
    }

   
}

module.exports = MiddleWare;