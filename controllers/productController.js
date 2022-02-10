const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const path = require('path');

// @desc    Create a product
// @route   POST /api/v1/products
// @access  Private/admin
const createProduct = async (req, res) => {
  if (!req.body.name) {
    const product = await Product.create({
      name: 'Sample product',
      price: 10000,
      description: 'Sample description',
      brand: 'rolex',
      category: 'men',
      featured: false,
      image:
        'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644027164/Watch-e-commerce/ibnmqj1ydqdhgbiltw6i.png',

      colors: ['#000'],
      user: req.user.userId,
    });
    res.status(StatusCodes.CREATED).json({ product });
  } else {
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
  }
};

// @desc    Get all products
// @route   GET /api/v1/products
// @access  Private/admin
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

// @desc    Get product by id
// @route   GET /api/v1/products/:id
// @access  Public
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId }).populate({
    path: 'reviews',
    populate: {
      path: 'user',
    },
  });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json(product);
};

// @desc    Update product
// @route   PATCH /api/v1/products/:id
// @access  Private/admin
const updateProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  res.status(StatusCodes.OK).json({ product });
};

// @desc    Delete product
// @route   DELETE /api/v1/products/:id
// @access  Private/admin
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Product removed.' });
};

// @desc    Upload product image
// @route   POST /api/v1/products/uploadImage
// @access  Private/admin
const uploadImage = async (req, res) => {
  console.log(req.files);
  if (!req.files) {
    throw new CustomError.BadRequestError('No File Uploaded');
  }
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload Image');
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      'Please upload image smaller than 1MB'
    );
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );

  await productImage.mv(imagePath);
  res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}` });
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
