let mysql = require('mysql');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'book_u',
  port: 3306
});

const query = function (sql, option, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, option, function (error, results, fields) {
      connection.release();
      if (error) throw error;
      callback(err, results, fields)
    })
  })
};

module.exports = query;
