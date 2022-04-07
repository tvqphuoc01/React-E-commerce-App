const brandModel = require('../models/brand.model');

const getBrandData = async function(brandId) {
    const brandData = await brandModel.find(
        { _id: brandId }
      );
    return brandData;
}

module.exports = {
    getBrandData
}