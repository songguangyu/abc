'use strict';
var fs = require('fs');
var path = require('path');

class Init{
	constructor() { //构造函数
        this.init();
    }

    init(context) {
        let path = process.cwd()+"/controller";

        Abc.cacheDate = {};

        Abc.cacheDate.controller = this.travel(path);

        //console.log(Abc.cacheDate.controller["/Users/sgy/abc/controller/IndexAction.js"]);

        //return ;       
    }

    travel(dir) {
        let controller = {};
        let reg = /.js$/; 

        fs.readdirSync(dir).forEach(function (file) {

            var pathname = path.join(dir, file);

            if (fs.statSync(pathname).isDirectory()) {
                this.travel(pathname);
            } else {
                if(reg.test(pathname)) {
                    controller[pathname] = require(pathname); 
                }
            }
        });

        return controller;
    }
    		
}

module.exports = Init;