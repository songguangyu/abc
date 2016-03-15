'use strict';
var fs = require('fs');
var B = require('./b.js');

class C extends B {
	constructor() { //构造函数
        super();
    }

    init(context) {
		this.context = context;
        this.dispense();
    }

    dispense() {
        //缓存request对象
        let request = this.context.request;
        this.getParams(request.url);
        //处理favicon.ico图标请求
		if(request.url === '/favicon.ico') {
			// let favicon = fs.readFile('');
			// context.accepts('image/png');
			// context.body = favicon;
 		} else if(false) {
 			//处理静态资源
 		} else {
 			//处理请求
    		let url = request.handleUrl.split('/');
    		switch(url.length) {
    			case 1:
    			this.instantiation("","",this.context);
    			break;
    			case 2:
    			this.instantiation(this.toChangeCase(url[1]),"",this.context);
    			break;
    			default:
    			let fileName = "";
    			for(var i=1;i < url.length-1;i++) {
    				if((url.length-2) == i) {
    					fileName += this.toChangeCase(url[i]);
    				}else {
    					fileName += (url[i]+'/');
    				}
						
    			}
    			let action = url[url.length-1];
    			this.instantiation(fileName,action,this.context);
    			break;
    		}
		}
    }
    //实例化
	instantiation(fileName, action, context) {
        fileName  =  fileName || 'Index';
        action = action || 'index';
        this.makeAbc(fileName, action);

		try{
			let cnt = require('../controller/'+fileName+'Action.js');
			let act = new cnt(context);
			act[action]();
		}catch(e) {
			this.error(e)
		}
	}
    //包装abc对象
    makeAbc(fileName, action) {
        //单例abc对象
        let abc  = null;

        if( !this.context.abc) {
            this.context.abc = abc = {};
            abc.response = {}
            abc.response.fail = {
                "errorno": '9999',
                "errormsg": ""
            }
            abc.response.success = {
                "errorno": '0000',
                "errormsg": "",
                "data": null
            }
        }
        abc.viewPath = './view/'+fileName+'/'+action+'.html';
       
    }

    error(e) {
        this.log(e);

        if(this.context.request.method === 'POST') {
            this.context.response.status  = 500;
        } else if(this.context.request.method === 'GET'){
            this.display('error/404.html');
        }
    }
    		
}

module.exports = C;