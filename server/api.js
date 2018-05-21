const express = require('express');
const router = express.Router();
const query = require('./db');
const fs = require('fs');
var $sql = require('./sqlMap');

var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};


// 增加用户接口
router.post('/register', (req, res) => {
  var sql_name = $sql.user.select_name
  var sql = $sql.user.add;
  var {username, password, email} = req.body;

  query(sql_name, username, function (err,result) {
    if(err) {
      console.log(err)
    }
    if(result[0]===undefined) {
      query(sql, [username, password, email], function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          jsonWrite(res, result);
        }
      })
    }else {
      res.send('-1')    //当前注册username与数据库重复时，data返回-1
    }
  });
});

//查找用户
router.post('/login', (req, res) => {
  var sql_name = $sql.user.select_name;
  var {username, password} = req.body;

  query(sql_name, username, function (err, result) {
    if(err) {
      console.log(err)
    }
    if(result[0]===undefined) {
      res.send('-1'); //username查找失败
    } else if (result[0].username==='admin') {
      if (result[0].password === password) {
        res.send('1'); //密码匹配，返回1
      } else {
        res.send('0'); //密码不匹配，返回0
      }
    }else {
      if (result[0].password !== password) {
        res.send('0'); //密码不匹配，返回0
      }
      else {
        jsonWrite(res, result);
      }
    }
  })
});

//书库
router.get('/newbooks', (req, res) => {
  var sql_book = $sql.book.select_all;
  query(sql_book, function (err, books) {
    if(err) console.log(err);
    res.send(books)
  })
});

//首页
router.get('/newindex', (req, res) => {
  var sql_book = $sql.book.select_all;
  query(sql_book, function (err, books) {
    if(err) console.log(err);
    res.send(books);
  })
});

//用户列表
router.get('/admin/userlist', (req, res) => {
  var sql_user = $sql.user.select_all;
  query(sql_user, function (err, users) {
    if(err) console.log(err);
    res.send(users);
  })
});

//删除用户
router.post('/admin/deleteUser', (req, res) => {
  var delete_user = $sql.user.delete_user;
  var id = req.body._id;
  query(delete_user, id, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});

//编辑用户
router.get('/admin/useredit/:id', (req, res) => {
  var select_user = $sql.user.select_user;
  var id = req.params.id;
  query(select_user, id, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});

router.get('/admin/useredit', (req, res) => {

});

//保存用户
router.post('/admin/saveuser', (req, res) => {
  var update_user = $sql.user.update_user;
  var add_user = $sql.user.add;
  var {username, password, icon, email, id} = req.body;

  // console.log(req.body);

  if (id) {
    query(update_user, [username, password, icon, email, id], function (err, result) {
      if (err) console.log(err);
      res.send('1');
    })
  } else {
    query(add_user, [username, password, icon, email], function (err, result) {
      if (err) console.log(err);
      res.send('0');
    })
  }
});

//书目列表
router.get('/admin/booklist', (req, res) => {
  var sql_book = $sql.book.select_all;
  query(sql_book, function (err, books) {
    if(err) console.log(err);
    res.send(books);
  })
});

//排序算法
function compare(property){
  return function(a,b){
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}

router.get('/top', (req, res) => {
  var sql_book = $sql.book.select_all;
  query(sql_book, function (err, books) {
    var arr = [];
    if(err) console.log(err);
    books.sort(compare('data'));
    books.forEach(function (e, i) {
     if(i < 10) {
       arr.push(e);
     }
      return;
    });
    jsonWrite(res, arr);
  })
});


//删除书目
router.post('/admin/deleteBook', (req, res) => {
  var delete_book = $sql.book.delete_book;
  var id = req.body._id;
  query(delete_book, id, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});


//编辑书目
router.get('/admin/bookedit/:id', (req, res) => {
  var select_book = $sql.book.select_book;
  var id = req.params.id;
  query(select_book, id, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});

router.get('/admin/bookedit/', (req, res) => {

});

//保存书目
router.post('/admin/savebook', (req, res) => {
  var update_book = $sql.book.update_book;
  var add_book = $sql.book.add;
  var {bookName, author, remark, type, cover, id} = req.body;

  if (id) {
    query(update_book, [bookName, author, type, cover, remark, id], function (err, result) {
      if (err) console.log(err);
      res.send('1');
    })
  } else {
    query(add_book, [bookName, author, type, cover, remark], function (err, result) {
      if (err) console.log(err);
      res.send('0');
    })
  }
});

//搜索书目
router.get('/searchMsg/:bookname', (req, res) => {
  var bookname = "%"+req.params.bookname+"%";
  var select_book = $sql.book.select_book_name;
  query(select_book, bookname, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});

router.get('/searchMsg', (req, res) => {

});

router.get('/readbefore/:bookid', (req, res) => {
  var bookid = req.params.bookid;
  var bookname = "SELECT * FROM book"+ bookid;

  query(bookname, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});

router.get('/reading/:page', (req, res) => {
  console.log(req.params);

  arr = req.params.page.split('&');
  var sql = "SELECT title, content from book"+arr[1]+ " where id = " + arr[0];

  query(sql, function (err, result) {
    if (err) console.log(err);
    jsonWrite(res, result);
  })
});


//书籍下载
router.post('/download', (req, res) => {
  var bookid = req.body._id;
  var bookname = "SELECT * FROM book"+ bookid;
  var content = '';

  query(bookname, function (err, result) {
    if (err) console.log(err);
    result.forEach(function (e) {
      content = content + e.title + '\n' + e.content + '\n';
    });

    // console.log(content);

    fs.writeFile('./static/1.txt',content,function(err){
      if(err)
        return console.error(err);
      console.log('写入文件成功');
    });

    jsonWrite(res, result);
  })
  // query(delete_user, id, function (err, result) {
  //   if (err) console.log(err);
  //   jsonWrite(res, result);
  // })
});


module.exports = router;
