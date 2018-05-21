
var sqlMap = {
  // 用户
  user: {
    add: 'insert into users( username, password, icon, email) values ( ?, ?, ?, ?)',
    select_name: 'SELECT * from users where username = ?',
    select_password: 'SELECT * from users where password = ?',
    select_all: 'SELECT * FROM users',
    delete_user: 'DELETE FROM users WHERE id = ?',
    update_user: 'UPDATE users SET username = ?, password = ?, icon = ?, email = ? WHERE id = ?',
    select_user: 'SELECT * from users where id = ?',
  },

  book: {
    add: 'INSERT INTO booklist (bookName, author, type, cover, remark) VALUES (?, ?, ?, ?, ?)',
    select_book: 'SELECT * from booklist where id = ?',
    select_book_name: "SELECT * from booklist where bookName LIKE ?",
    select_all: 'SELECT * FROM booklist',
    select_data: 'SELECT data FROM booklist',
    select_content: "SELECT * FROM ?",
    delete_book: 'DELETE FROM booklist WHERE id = ?',
    update_book: 'UPDATE booklist SET bookName = ?, author = ?, type = ?, cover = ?, remark = ? WHERE id = ?'
  }
}

module.exports = sqlMap;
