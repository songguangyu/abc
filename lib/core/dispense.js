'use strict';
var co  =require('co');

class Dispense{
	constructor(context) { //构造函数
        //this.init(context);
    }

    *init(context, next) {
    	if(context.http.action || context.http.controller) {
            let cwd = process.cwd();
            if(context.http.controller) {
                var controller = "/"+context.http.controller;
            } else {
                var controller = "/index";
            }
            if(context.http.action) {
                var action = "/"+context.http.action;
            }
            let fAction = cwd+"/controller"+controller+"Action.js";
            console.log(fAction);
            let instance = new Abc.cacheDate.controller[fAction](context);
            //instance[context.http.action](context);
            return co.wrap(instance[context.http.action]).bind(instance)(context, next)
        }
    }

}

module.exports = Dispense;