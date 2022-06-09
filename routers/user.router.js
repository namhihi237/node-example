const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

// @ts-ignore
userRouter.get('/users', userController.getAll);
// @ts-ignore
userRouter.get('/users/:id', userController.deleteUser);
// @ts-ignore
userRouter.put('/users/:id', userController.update);
// @ts-ignore
userRouter.get('/users/:id', userController.user);

module.exports = userRouter;