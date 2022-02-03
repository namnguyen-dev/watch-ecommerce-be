const Order = require('../models/Order');
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { checkPermissions } = require('../utils');

const createOrder = async (req, res) => {
  console.log(req.body);
  req.body.user = req.user.userId;
  console.log(req.body);
  const {
    items: cartItems,
    tax,
    shipping_fee,
    shippingAddress,
    paymentMethod,
    user,
  } = req.body;

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided');
  }
  if (!shipping_fee) {
    throw new CustomError.BadRequestError('Please provide shipping fee');
  }

  let orderItems = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const itemId = item.id.substring(0, item.id.indexOf('#'));
    const dbProduct = await Product.findOne({ _id: itemId });
    if (!dbProduct) {
      throw new CustomError.NotFoundError(`No product with id : ${itemId}`);
    }
    const { name, price, _id } = dbProduct;

    const singleOrderItem = {
      id: _id,
      name,
      color: item.color,
      amount: item.amount,
      image: item.image,
      price,
    };
    orderItems = [...orderItems, singleOrderItem];
    subtotal += item.amount * price;
  }

  const total = tax + shipping_fee + subtotal;

  const order = await Order.create({
    tax,
    shipping_fee,
    subtotal,
    total,
    orderItems,
    user,
    shippingAddress,
    paymentMethod,
  });

  res.status(StatusCodes.CREATED).json(order);
};

const getAllOrders = async (req, res) => {
  res.send('getAllOrders');
};
const getSingleOrder = async (req, res) => {
  res.send('getSingleOrder');
};
const getCurrentUserOrders = async (req, res) => {
  res.send('getCurrentUserOrders');
};

const updateOrder = async (req, res) => {
  res.send('updateOrder');
};
const updateOrderToDelivered = async (req, res) => {
  res.send('updateOrderToDelivered');
};
const updateOrderToPaid = async (req, res) => {
  res.send(' updateOrderToPaid');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
  updateOrderToDelivered,
  updateOrderToPaid,
};
