'use strict';

class A{
	
	//把首字母转换成大写 其余转换成小写
	toChangeCase(str) {
		let firstLetter  = str.slice(0,1);
		firstLetter = firstLetter.toUpperCase();
		let otherLetter = str.slice(1);
		otherLetter = otherLetter.toLowerCase();
		return firstLetter+otherLetter
	}
	//标准输出流
	static log(e){
		 process.stdout.write(e + '\n');
	}

	//解析URL参数 返回json
	getParams(url) {
		if(url && (A.type(url) !== "string")) {
			A.log('参数必须是一个url')
		}
		let searchArray = url.split('?');
		if(searchArray.length === 2) {
			this.context.request.handleParams =  A.handleSearch(searchArray[1]);
			this.context.request.handleUrl =  searchArray[0];
		}else {
			this.context.request.handleUrl =  searchArray[0];
		}
	}

	static handleSearch(search) {
		let searchArray = search.split('&');
		let object = {};
		searchArray.forEach((item)=>{
			let key = item.split('=')[0];
			let value = item.split('=')[1];
			object[key] = value;
		})
		return object
	}

	static type(param) {
		if((typeof param) === "object"){
			return Abc.Object.toString.call(param);
		} else {
			return typeof param
		}
		
	}
}

module.exports = A;





