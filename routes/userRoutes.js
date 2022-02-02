const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  userUpdateProfile,
} = require('../controllers/userController');

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin'), getAllUsers);

router.route('/profile').get(authenticateUser, showCurrentUser);
router.route('/userUpdateProfile').patch(authenticateUser, userUpdateProfile);
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser).patch(authenticateUser, authorizePermissions('admin'), updateUser);

module.exports = router;
