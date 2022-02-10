const Order = require('../models/Order');
const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { checkPermissions } = require('../utils');

// @desc    Create order
// @route   POST /api/v1/orders
// @access  Public
const createOrder = async (req, res) => {
  const user = req.user.userId;
  const {
    items: cartItems,
    tax,
    shipping_fee,
    shippingAddress,
    paymentMethod,

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

// @desc    Get all orders
// @route   POST /api/v1/orders
// @access  Private/admin
const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).populate('user');
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

// @desc    Get order by Id
// @route   GET /api/v1/orders/:id
// @access  Public
const getSingleOrder = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOne({ _id: orderId }).populate(
    'user',
    'name email'
  );
  if (!order) {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
  checkPermissions(req.user, order.user._id);
  res.status(StatusCodes.OK).json({ order });
};

// @desc    Get current user's orders
// @route   GET /api/v1/orders/showAllMyOrders
// @access  Public
const getCurrentUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ orders, count: orders.length });
};

// @desc    Update order to paid
// @route   POST /api/v1/orders/:id/pay
// @access  Public
const updateOrderToPaid = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findById(orderId);

  if (order) {
    order.status = 'paid';
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.status(StatusCodes.OK).json(updatedOrder);
  } else {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
};

// @desc    Update order to delivered
// @route   POST /api/v1/orders/:id/deliver
// @access  Private/admin
const updateOrderToDelivered = async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findById(orderId);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.status(StatusCodes.OK).json(updatedOrder);
  } else {
    throw new CustomError.NotFoundError(`No order with id : ${orderId}`);
  }
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrderToDelivered,
  updateOrderToPaid,
};
