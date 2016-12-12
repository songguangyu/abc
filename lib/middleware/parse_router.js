'use strict';
var URL = require('url');
var fs = require('fs');
var mime = require('mime');
module.exports = class {

  * run(context, next) {
  	let pathname = context.request.pathname =  URL.parse(context.request.url).pathname;
  	let staticReg = /^\/static/;
    let faviconReg = /^\/favicon.ico/;
  	if(staticReg.test(pathname)) {
  		let resource =  yield this.getStaticResource(pathname);
      context.status = 200;
      context.type = mime.lookup(pathname);
      context.body = resource;
      return;
  	}
    if(faviconReg.test(pathname)) {
      let resource =  yield this.getStaticResource("/static"+pathname);
      context.status = 200;
      context.body = resource;
      return;
    }

  	let pathArray = pathname.slice(1).split("/");
    if(pathArray.length === 1 && pathArray[0] === ""){
      context.http.controller = "";
      context.http.action= "index";
    }else if(pathArray.length === 1) {
      context.http.controller = pathArray[0];
      context.http.action= "index";
  	}else if(pathArray.length > 1) {
      context.http.controller = pathArray.slice(0,pathArray.length-1).join("/");
      context.http.action= pathArray[pathArray.length-1];
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