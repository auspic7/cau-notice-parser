const https = require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

https.get('https://www.cau.ac.kr/04_ulife/causquare/notice/notice_list.php?bbsId=cau_notice', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (chunk) => {

        console.log(plainText);
        console.log(typeof plainText);

        var cauNotice = new JSDOM(plainText);
        console.log(cauNotice.window.document.querySelector('.bbs'))
    });

}).on('error', (e) => {
    console.error(e);
});