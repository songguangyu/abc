'use strict';

//基础方法
var ejs = require('ejs');
var cookie  = require("../util/cookie.js");
var base = require("./base.js");

class Http extends base{

	constructor() { //构造函数
		super();
    }


	http() {
		return this;
	}

	post(name) {
		if(name){
			return this.context.http.postParams[name];
		}
		return this.context.http.postParams;
	}

	get(name) {
		if(name){
			return this.context.http.getParams[name];
		}
		return this.context.http.gettParams;
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

	file(name) {
		return this.context.http.file;
	}

	end(data = null) {
		return this.context.body = data;
	}

	cookie(...name) {
		let cookieparse = cookie.parse(this.context.req.headers.cookie);
		if(name.length === 0) {
			return cookieparse;
		} else if(name.length === 1) {
			return cookieparse[name[0]]|| "";
		} else if(name.length > 1) {
			this.context.cookies.set(name[0], name[1], name[2]);
		}
	}

	view() {
		if(!this._view) {
			let cls = require("./view.js");
			this._view = new cls(this.context);
		}
		return this._view;
	}
}



module.exports = Http;
