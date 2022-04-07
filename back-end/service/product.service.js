const productModel = require('../models/products.model');

// Get all product in database
const getAllProductsData = async function() {
    const productData = await productModel.find();
    return productData;
}

// Get product by BrandId
const getProductByBrand = async function (brandCode) {
    const productData = await productModel.find(
      { brand: brandCode }
    );
    return productData;
  }

module.exports = {
    getAllProductsData,
    getProductByBrand
}