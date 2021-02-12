var http = require('http');	// 서버 만드는 모듈 불러오기
var fs = require('fs');
var url = require('url');
function templateHTML(title,list,body){
  return `
  <!doctype html>
  <html>
    <head>
     <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
       ${list}
       ${body}
    </body>
   </html>
  `
  ;
}
var app = http.createServer(function(request,response){
    console.log(request);
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';	// 실행할 url
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(1972);