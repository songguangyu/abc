'use strict';
var mysql = require('mysql');

class Model{
	constructor() { //构造函数
        this.init();
    }

    init(context) {
        var dbConfig = require(Abc.path.config+'/db.js');
        
        Abc.dbConnection = mysql.createPool({
          host     : dbConfig.host,
          user     : dbConfig.user,
          password : dbConfig.password,
          database : dbConfig.database
        });
    }

}

module.exports = Model;