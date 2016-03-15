'use strict';

//基础方法
var fs = require('fs');
var A = require('./a.js');

class B extends A {
	constructor() { //构造函数
		super();
		//this.abc = this.context.abc;
    }

	display(template) {
		//是
		this.context.type = 'text/html';

		if(template) {
			this.context.body = this.view(template);
		} else {
			this.context.body = this.view();
		}
	}

	view(path) {
		//console.log(this.context.abc)
		if(path) {
			var html = fs.readFileSync('view/'+path,'utf-8');
		}else {
			var html = fs.readFileSync(this.context.abc.viewPath,'utf-8');
		}
		
		return html
	}

	http() {
		return this;
	}

	//返回一个json
	json(object) {
		this.context.body = object;

	}

	success(param) {
		this.context.abc.response.success.data = param;
		this.context.body = this.context.abc.response.success;
	} 

	fail(errorno,errormsg) {
		this.context.abc.response.fail.errorno = errorno;
		this.context.abc.response.fail.errormsg = errormsg;
		this.context.body = this.context.abc.response.success;
	}

	jsonp() {
		
	}
}



module.exports = B;
