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

// Get product by Id
const getProductById = async function(productId) {
  const productData = await productModel.findOne(
    { _id: productId }
  ).lean().exec();
  return productData;
}

module.exports = {
    getAllProductsData,
    getProductByBrand,
    getProductById
}