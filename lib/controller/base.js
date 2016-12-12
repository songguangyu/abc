'use strict';

var path = require('path');
var Http = require("../core/http.js");

var fs = require('fs');

//var base = require("../core/base.js");
/**
 * base controller class
 * all controllers will inherits this class
 */
class Base extends Http {

	constructor() {
		 super(); 
	}

    assign(data) {
		this.view().assign(data);
	}	

    display(template) {
    	this.view().display(template);		
	}

	fetch() {
		this.view().fetch();	
	}

	model(query) {

		return new Promise((resolve, reject)=>{
			Abc.dbConnection.getConnection(function(err, connection) {
			  // 连接
			  connection.query(query, function(err, rows) {
			    // 查询后释放请求
			    //console.log(rows);
			    connection.release();
			    resolve(rows);
			  });
			});
		})


		
	}
}
module.exports = Base;