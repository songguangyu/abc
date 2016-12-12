'use strict';
var fs = require('fs');
var _ = require("lodash");
var ejs = require('ejs');

class View extends Abc.Http{
	constructor(context) { //构造函数
        super();
        this.cache.assignData = {};
		this.cache.template = "";
		this.context = context;
		this.viewConfig  = require('../config/view.js');
    }

    //获取视图
    view(path) {
		let html = "";
		if(path) {
			 html = fs.readFileSync('view/'+path,'utf-8');
		} else {
			if(this.context.http.controller) {
				var controller = "/"+this.context.http.controller;
			} else {
				var controller = "/"+this.context.http.controller;
			}

			let viewRootpath = this.viewConfig.root_path || "view";
			let file_ext = this.viewConfig.file_ext || "html";
			html = fs.readFileSync(viewRootpath+'/'+this.context.http.controller+"/"+this.context.http.action+file_ext,'utf-8');
		}
		this.cache.template = html;
		return html
	}

	//插入数据
    assign(data) {
		_.extend(this.cache.assignData, data);
	}

	render(template) {
		this.viewConfig.delimiterLeft && (ejs.open = '{{')
		this.viewConfig.delimiterRight && (ejs.close = '}}')
		let view = this.view(template);
		return ejs.render(view,this.cache.assignData);
	}
	//返回模板
    display(template) {
		//this.context.type = 'text/html';
		if(!_.isEmpty(this.cache.assignData)) {
			if(template) {
				this.context.body = this.render(template);
			} else {
				this.context.body = this.render(template);
			}
		}
	}

	//获取模板的渲染内容
	fetch(template) {
		return this.render(template);
	}
}

module.exports = View;