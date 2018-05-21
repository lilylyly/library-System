const query = require('../db');

const route = (req, res) => {
  const id = req.query.id || 0;
  query(id ? `select * from booklist where id=${id};` : `select * from booklist;`, [1], (err, results, fields) => {
    if (err) throw err;
    id ? res.send(results[0]) : res.send(results);
  })
}

module.exports = route;
