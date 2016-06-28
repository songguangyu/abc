'use strict';

//基础方法
var fs = require('fs');
var Base = require('./base.js');
var ejs = require('ejs');

class B extends Base {

	constructor() { //构造函数
		super();
		this.tpl = "";
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
		let  html = "";

		if(path) {
			 this.tpl = fs.readFileSync('view/'+path,'utf-8');
		}else {
			 this.tpl = fs.readFileSync(this.context.abc.viewPath,'utf-8');
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

	assign(data) {

		let template = ejs.compile(this.view(), options);

		template(data);

		ejs.render(str, data, options);
	}
}



module.exports = B;
