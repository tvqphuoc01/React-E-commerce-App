const productService = require('../service/product.service');

const productController = function(req, res) {
    const { brandId } = req.query;
    productService.getProductByBrand(brandId).then((data)=>{
        res.json(data);
    });
    return;
}

module.exports = {
    productController,
}