'use strict';
var Abc = require('../lib/abc.js');

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
}

module.exports = Index;