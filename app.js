const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./server/api');
// const cheerio = require('cheerio')
// const superagent = require('superagent')
// require('superagent-charset')(superagent)
// const async = require('async');
// const url = 'https://www.qqtn.com/tx/haokantx_1.html';
// const mysql = require('mysql');
//
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'library',
//   port: 3306
// })
// function savetoMysql(arrs) {
//   arrs.forEach(function (arr) {
//     pool.query('insert into users set ?', arr, function (err, res) {
//       if (err) throw err;
//       console.log(`insert ${arr.id} success`);
//     })
//   });
// }
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

app.get('/booklist', require('./server/route/booklist'));

app.get('/users', require('./server/route/users'));

app.get('/admin', require('./server/route/admin'));

app.get('/', function (req, response) {
  // superagent.get(url)
  //   .charset('gb2312')
  //   .end(function (err, res) {
  //     var $ = cheerio.load(res.text);
  //     // console.log(res.text);
  //     var arr = [];
  //     $('.g-list-left a').each((i) => {
  //       {
  //         arr.push({
  //           // id: i,
  //           // bookName: $('#list_box li h2 a').eq(i).text(),
  //           // author: $('.author a').eq(i).text(),
  //           // type: $('.author').next().find('a').eq(i).text(),
  //           // cover: $('.Aimg img').eq(i).attr('src'),
  //           // remark: $('.intro p').eq(i).text()
  //           icon: $('.g-list-left img').eq(i).attr('src'),
  //           username: 'lily',
  //           password: '123456',
  //           email: '135832334@qq.com'
  //         })
  //       }
  //     })
  //     response.send(arr);
  //     savetoMysql(arr);
  //   })
  response.send('hahaha')
});

app.listen(8080, function () {
  console.log('server listening on 8080')
})
