'use strict';
var Abc = require('../lib/core/abc.js');

class Index extends Abc.C {
	constructor(context) { //构造函数
		super(context);
		this.context = context;
    }

	index() {
		this.display();
	}

	admin() {
		this.display();
	}

	abc() {
		this.success({
			'sgy': '帅',
			'sure': true
		});
	}

	uploader() {
		var file = this.file();
		this.success({
			'file': file
		});
	}
}

module.exports = Index;