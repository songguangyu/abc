'use strict';
var co =require('co');

class Index extends Abc.controller{
	constructor(context) { //构造函数
		super(context);
		this.context = context;
    }

	*index() {
		var cookie = this.cookie("sgy","111111");
		this.assign({aaa:"我爱你"});
		let data  = yield this.model('select * from class');
		this.display();
	}

	timeout() {
		setTimeout(()=>{
			 this.display();
		},1000)
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