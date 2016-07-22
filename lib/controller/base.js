'use strict';

var path = require('path');
var Http = require("../core/http.js");
var ejs = require('ejs');
var fs = require('fs');
var _ = require("lodash");
//var base = require("../core/base.js");
/**
 * base controller class
 * all controllers will inherits this class
 */
 class Base extends Http {

	 constructor() {
		 super();
		 this.cache.assignData = {};
		 this.cache.template = "";
	 }

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
			 
			html = fs.readFileSync('view/'+this.context.http.controller+"/"+this.context.http.action+".html",'utf-8');
		}
		this.cache.template = html;
		return html
	}

    assign(data) {
		_.extend(this.cache.assignData, data);
	}	

    display(template) {
		//this.context.type = 'text/html';
		if(!_.isEmpty(this.cache.assignData)) {
			if(template) {
				this.context.body = ejs.render(this.view(template),this.cache.assignData);
			} else {
				this.context.body =  ejs.render(this.view(),this.cache.assignData);
			}
		}
		
	}

    
}
module.exports = Base;