'use strict';

var URL = require('url');
var querystring = require("querystring");
var formidable = require('formidable');
var url = require('url');

module.exports = class {
  *run(context, next) {
  	var req = context.req;
  	if(req.method == "POST") {
  		let data = yield this.getPostData(context);    
  	} else if(req.method == "GET") {
      let data = this.getGetData(context);    
    }
  }
  //解析get参数
  getGetData(context) {
    var get = {},
      req = context.req;
      var arg = url.parse(req.url, true).query;
      context.http.getParams = arg;
      return arg;
  }
  //解析post参数 包含上传文件
  getPostData(context) {
  	var post = {},
  		file = {},
  		req = context.req,
  		postdata = "",
  		form = new formidable.IncomingForm();
  	form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = process.cwd()+'/runtime/file';	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
  	return new Promise(function (resolve, reject) {
  		form.parse(req)
  	        .on('field', function(name, value) {  // 字段
  	            post[name] = value;
  	            context.http.postParams = post;
  	        })
  	        .on('file', function(name, file) {  //文件
  	            post[name] = file;
  	            context.http.file = file;
  	        })
  	        .on('error', function(error) {  //结束
  	            reject(error);
  	        })
  	        .on('end', function() {  //结束
  	            resolve(post);
  	        });
  	});
  }
}