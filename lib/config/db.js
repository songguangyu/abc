module.exports =  {
  type: "mysql", //数据库类型
  log_sql: true, //是否记录 sql 语句
  log_connect: true, // 是否记录连接数据库的信息
  host: "127.0.0.1", //数据库 host
  port: "", //端口
  database: "navigation", //数据库名称
  user: "root", //账号
  password: "", //密码
  prefix: "abc_", //数据表前缀
  encoding: "utf8", //数据库编码
  nums_per_page: 10, //一页默认条数

};