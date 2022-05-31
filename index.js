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