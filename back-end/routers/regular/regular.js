const express = require('express');
const router = express.Router();

const productController = require('../../controller/products.controller');

router.get('/product', productController.productController);

module.exports = router;