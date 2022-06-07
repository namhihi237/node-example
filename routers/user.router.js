const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/users', userController.getAll);
userRouter.get('/users/:id', userController.deleteUser);

module.exports = userRouter;