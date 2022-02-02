const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name must be less than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    image: {
      type: String,
      default: '/images/example.jpeg',
    },
    brand: {
      type: String,
      required: [true, 'Please provide brand name'],
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: ['men', 'women'],
    },
    shipping: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    colors: {
      type: [String],
      default: ['#ece6db'],
      required: true,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
