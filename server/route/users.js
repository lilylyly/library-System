const query = require('../db');

const route = (req, res) => {
  const id = req.query.id || 0;
  query(id ? `select * from users where id=${id};` : `select * from users;`, [1], (err, results, fields) => {
    if (err) throw err;
    id ? res.send(results[0]) : res.send(results);
  })
}

module.exports = route;
