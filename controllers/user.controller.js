const db = require('../utils/database');

const getAll = (req, res) => {
  try {
    console.log(req.params);
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

const deleteUser = (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
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
  deleteUser
}