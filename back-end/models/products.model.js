const mongoose = require('mongoose');

// Reply Schema
const replySchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
      default: null
    },
    anonymousUser: { /**For anonymous user */
      name: {
        type: String,
        default: null
      },
      avatar: {
        type: String,
        default: '/images/default-avatar.png'
      }
    },
    content: {
      type: String,
      required: true
    },
  }, { timestamps: true });

// Comment Schema
const commentSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
      default: null
    },
    anonymousUser: { /**For anonymous user */
      name: {
        type: String,
        default: null
      },
      avatar: {
        type: String,
        default: '/images/default-avatar.png'
      }
    },
    content: {
      type: String,
      required: true
    },
    reply: [replySchema]
  }, { timestamps: true });

// Product Schema
const product = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  brand: Number,
  price: String,
  rate: Number,
  comment: [commentSchema],
  info: String
});

module.exports = mongoose.model('product', product);