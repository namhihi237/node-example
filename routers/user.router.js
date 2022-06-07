const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/users', userController.getAll);
userRouter.get('/users/:id', userController.deleteUser);
userRouter.put('/users/:id', userController.update);
userRouter.get('/users/:id', userController.user);

module.exports = userRouter;