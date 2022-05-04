const productService = require('../service/product.service');

const productDataController = function(req, res) {
    const { productId } = req.query;
    productService.getProductById(productId).then((data)=>{
        res.json({
            productData: data
        });
    });
    return;
}

module.exports = {
    productDataController,
}