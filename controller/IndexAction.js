'use strict';

class Index extends Abc.Base {
	constructor(context) { //构造函数
		super(context);
		this.context = context;
    }

	index() {
		var cookie = this.cookie("sgy","111111");
		//console.log(cookie);
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