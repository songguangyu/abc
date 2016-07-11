'use strict';

//基础方法
var fs = require('fs');
var Base = require('./base.js');
var ejs = require('ejs');

class Http extends Base {

	constructor() { //构造函数
		super();
		//this.abc = this.context.abc;
    }

	display(template) {
		//this.context.type = 'text/html';
		if(template) {
			this.context.body = this.view(template);
		} else {
			this.context.body = this.view();
		}
	}

	view(path) {
		let  html = "";

		if(path) {
			 html = fs.readFileSync('view/'+path,'utf-8');
		}else {
			if(this.context.http.controller) {
				var controller = "/"+this.context.http.controller;
			} else {
				var controller = "/"+this.context.http.controller;
			}
			 
			html = fs.readFileSync('view/'+this.context.http.controller+"/"+this.context.http.action+".html",'utf-8');
		}
		
		return html
	}

	http() {
		return this;
	}

	post() {
		return;
	}

	//返回一个json
	json(object) {
		this.context.body = object;

	}

	success(param) {
		let object ={
			"errorno": '0000',
            "errormsg": "",
            "data": param
        }
		this.context.body = object;
	} 

	fail(errorno,errormsg) {
		let object ={
			"errorno": '9999',
            "errormsg": "",
            "data": null
        }
		this.context.body = object;
	}

	jsonp() {
		
	}

	assign(data) {

		let template = ejs.compile(this.view(), options);

		template(data);

		ejs.render(str, data, options);
	}

	file(name) {
		return this.context.http.file;
	}

	end() {
		
	}
}



module.exports = Http;
