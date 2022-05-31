const db = require('../utils/database');

const getAll = (req, res) => {
  try {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getAll,
}