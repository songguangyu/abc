'use strict';
var fs = require('fs');
var Http = require('./http.js');

class Gc{
	constructor() { //构造函数
        this.context = null;
    }

    init(context) {
		this.context = context.http;
        this.deleteTemporaryFile();
    }

    deleteTemporaryFile() {
        if(this.context.file) {
            fs.unlinkSync(this.context.file.path);
        }   
        
    }
    		
}

module.exports = Gc;