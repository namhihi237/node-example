const express = require('express');
require('dotenv').config();
const db = require('./utils/database');

const userRouter = require('./routers/user.router');

const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', userRouter);

// handle error
app.use('/', (err, req, res, next) => {
  const status = err.httpCode || 500;
  res.status(status).send({
    status,
    message: err.message,
  });
});

//handle 404
app.use('/', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Not found',
  });
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to the database');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});