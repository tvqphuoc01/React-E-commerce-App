const express = require('express');
const router = express.Router();

const productController = require('../../controller/products.controller');

const productDataController = require('../../controller/productData.controller');

router.get('/product', productController.productController);

router.get('/productData', productDataController.productDataController);

module.exports = router;