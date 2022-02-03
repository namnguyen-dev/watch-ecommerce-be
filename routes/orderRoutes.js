const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require('../controllers/orderController');

router
  .route('/')
  .post(authenticateUser, createOrder)
  .get(authenticateUser, authorizePermissions('admin'), getAllOrders);

router.route('/showAllMyOrders').get(authenticateUser, getCurrentUserOrders);

router.route('/:id/pay').patch(authenticateUser, updateOrderToPaid);

router
  .route('/:id/deliver')
  .patch(
    authenticateUser,
    authorizePermissions('admin'),
    updateOrderToDelivered
  );

router.route('/:id').get(authenticateUser, getSingleOrder);

module.exports = router;
