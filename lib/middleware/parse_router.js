'use strict';
var URL = require('url');
var fs = require('fs');

module.exports = class {

  *run(context, next) {
  	let pathname = context.request.pathname =  URL.parse(context.request.url).pathname;
  	let staticReg = /^\/static/;
  	if(staticReg.test(pathname)) {
  		let resource =  yield this.getStaticResource(pathname);
      //context.status = 301;
      //context.body = resource;
  	}
  	let pathArray = pathname.slice(1).split("/");
  	if(pathArray.length === 1 && pathArray[0] === "") {

  	}
  }

  getStaticResource(pathname) {
  	return new Promise(function (resolve, reject) {
	  	fs.readFile(process.cwd()+pathname,'utf-8', function(err,data){ 
  			if(err){ 
  			  reject(err);
  			}else {
  			  resolve(data);
  			}
	   	})
	  })
  }

}