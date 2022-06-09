const express = require('express');
const productController = require('../controllers/product.controller');
const productRouter = express.Router();

// @ts-ignore
productRouter.get('/products', productController.getAll);


module.exports = productRouter;