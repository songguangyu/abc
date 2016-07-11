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
	log(e){
		 process.stdout.write(e + '\n');
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





