const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//var topicRouter = require('./routes/topic');
var indexRouter = require('./js/index');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function (request, response, next) {
  fs.readdir('./data', function (error, filelist) {
    request.list = filelist;
    next();
  })
})
app.use('/',indexRouter);
app.listen(1972, function () {
  return console.log('example app listening on port 1972');
})



/*app = http.createServer(function(request,response){
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
app.listen(1972);*/