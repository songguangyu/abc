'use strict';
var fs = require('fs');

class Base  {
	constructor() { //构造函数
        //super();
        //this.makeAbc();
        this.cache = {};
    }

    init(context) {
		this.context = context;
        //this.dispense();
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

module.exports = Base;