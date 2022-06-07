const db = require('../utils/database');
import ApiError from '../utils/error';

const getAll = (req, res, next) => {
  try {
    console.log(req.params);
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        throw new ApiError('Error getting users', 500);
      }
      res.send(result);
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

const deleteUser = (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
      if (err) {
        throw new ApiError('Error deleting user', 500);
      }
      res.send(result);
    });
  } catch (error) {
    next(error);
  }
}

const update = (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    db.query(`UPDATE users SET name = '${name}' WHERE id = ${id}`, (err, result) => {
      if (err) {
        throw new ApiError('Error updating user', 500);
      }
      res.send(result);
    });
  } catch (error) {
    next(error);
  }
}

const user = (req, res) => {
  try {
    const { id } = req.params;
    db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
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
  deleteUser,
  update,
  user
}