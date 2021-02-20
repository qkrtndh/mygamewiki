module.exports = {
    HTML: function (title, list, description) {
        return `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/page.css">
        <title>My Game Wiki-${title}</title>
    </head>
    <body>
        <div id="nav">
            <a href="/"><img src="../images/logo.png" height="40px" alt="메인로고" title="메인로고"></a>
            <a id="loginlink" href="html/loginpage.html">로그인</a>
        </div>
        <div id="content">
        <a href="/">
            <h1 id="mainname">My Game Wiki</h1>
        </a>
        ${description}
        ${list}
        </div>
    </body>
     </html>
    `;
    },
    GameList: function (filelist) {
        var list = '<ol id="gamelist"><a>목차</a>';
        var i = 0;
        while (i < filelist.length) {
            list += `<li><a href='/page/${filelist[i]}'>${filelist[i]}</a></li>`;
            i += 1;
        }
        list = list + '</ol>';
        console.log("hi");
        return list;
    },

    List: function (filelist) {
        var list = '<ol>';
        var i = 0;
        while (i < filelist.length) {
            list += `<li><a href='/page/${filelist[i]}'>${filelist[i]}</a></li>`;
            i += 1;
        }
        list = list + '</ol>';
        return list;
    }

}