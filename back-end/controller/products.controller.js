const productService = require('../service/product.service');
const brandService = require('../service/brand.service');
const productController = function(req, res) {
    const { brandId } = req.query;
    productService.getProductByBrand(brandId).then((data)=>{
        brandService.getBrandData(brandId).then((brand) => {
            res.json({
                productData: data, 
                brand: brand
            });
        });
    });
    return;
}

module.exports = {
    productController,
}