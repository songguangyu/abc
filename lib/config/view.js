module.exports =  {
  type: "ejs", //模版引擎
  content_type: "text/html", //输出模版时发送的 Content-Type
  file_ext: ".html", //文件的扩展名
  root_path: "view", //视图文件的根目录
  delimiterLeft: "",
  delimiterRight:"",
  adapter: { //模版引擎需要的配置项
    ejs: {}, //使用 ejs 模板引擎时额外配置
    nunjucks: {} //使用 nunjucks 模板引擎时额外配置
  } 
};