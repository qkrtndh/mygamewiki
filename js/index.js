var express = require('express');
var router = express.Router();
var template = require('./template.js');

router.get('/', function (request, response) {

    var title = "My Game Wiki";
    var description = "My Game Wiki에 오신 것을 환영합니다.<br> 본 페이지는 웹페이지 공부를 겸하여 제가 즐기는, 좋아하는 게임들의 정보를 위키 형식으로 정리한 페이지 입니다.";
    var list = template.GameList(request.list);
    var HTML = template.HTML(title, list,description);
    console.log("1");
    response.send(HTML);
  })

  module.exports = router;