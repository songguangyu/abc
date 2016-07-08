'use strict';
var fs = require('fs');
var Http = require('./http.js');

class C extends Http {
	constructor() { //构造函数
        super();
        this.makeAbc();
    }

    init(context) {
		this.context = context;
        this.dispense();
    }

 //    //实例化
	// instantiation(fileName, action, context) {
 //        fileName  =  fileName || 'Index';
 //        action = action || 'index';
 //        this.makeAbc(fileName, action);

	// 	try{
	// 		let cnt = require('../controller/'+fileName+'Action.js');
	// 		let act = new cnt(context);
	// 		act[action]();
	// 	}catch(e) {
	// 		this.error(e)
	// 	}
	// }
    //包装abc对象
    makeAbc() {
        //单例abc对象
        let abc  = null;

        if( !this.abc) {
            this.abc = abc = {};
            abc.response = {}
            abc.response.fail = {
                "errorno": '9999',
                "errormsg": ""
            }
            abc.response.success = {
                "errorno": '0000',
                "errormsg": "",
                "data": null
            }
        }
    }

    error(e) {
        console.log(e.toString().red);
        if(this.context.request.method === 'POST') {
            this.context.response.status  = 500;
        } else if(this.context.request.method === 'GET'){
            this.display('error/404.html');
        }
    }
    		
}

module.exports = C;