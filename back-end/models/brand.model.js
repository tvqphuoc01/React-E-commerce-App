const mongoose = require('mongoose');

const brand = new mongoose.Schema({
    brandName: {
      type: String,
      required: true,
    },
    info: String,
    image: String,
  });
  
module.exports = mongoose.model('brand', brand);