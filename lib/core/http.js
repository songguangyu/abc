'use strict';

//基础方法
var fs = require('fs');
var ejs = require('ejs');
var cookie  = require("../util/cookie.js");
var base = require("./base.js");

class Http extends base{

	constructor() { //构造函数
		
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
}



module.exports = Http;
