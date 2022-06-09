const db = require('../utils/database');
import ApiError from '../utils/error';

const getAll = (req, res, next) => {
  try {
    console.log(req.params);
    db.query('SELECT * FROM products', (err, result) => {
      if (err) {
        throw new ApiError('Error getting users', 500);
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