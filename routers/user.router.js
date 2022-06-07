const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/users', userController.getAll);
userRouter.put('/users/:id', userController.update);

module.exports = userRouter;