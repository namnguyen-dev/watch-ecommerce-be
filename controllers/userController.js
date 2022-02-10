const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const {
  checkPermissions,
  attachCookiesToResponse,
  createTokenUser,
} = require('../utils');

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Private/Admin
const getAllUsers = async (req, res) => {
  const users = await User.find({}).select('-password');
  res.status(StatusCodes.OK).json({ users });
};

// @desc    Get user by id
// @route   GET /api/v1/users/:id
// @access  Public
const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password');
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
  }

  checkPermissions(req.user, user._id);

  res.status(StatusCodes.OK).json({ user });
};

// @desc    Show current user
// @route   GET /api/v1/users/profile
// @access  Public
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

// @desc    Admin updates user
// @route   PATCH /api/v1/users/:id
// @access  Private/Admin
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.role = req.body.isAdmin ? 'admin' : 'user';

    const updatedUser = await user.save();
    const tokenUser = createTokenUser(updatedUser);

    res.status(StatusCodes.OK).json({ user: tokenUser });
  } else {
    throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`);
  }
};

// @desc    User updates password
// @route   PATCH /api/v1/users/updateUserPassword
// @access  Public
const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError('Please provide both values');
  }
  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: 'Success! Password Updated.' });
};

// @desc    User updates profile
// @route   PATCH /api/v1/users/userUpdateProfile
// @access  Public
const userUpdateProfile = async (req, res) => {
  const user = await User.findById(req.user.userId);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    const tokenUser = createTokenUser(updatedUser);

    attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.OK).json({ user: tokenUser });
  } else {
    throw new CustomError.NotFoundError(`No user with id : ${req.user.userId}`);
  }
};

// @desc    Delete user by id
// @route   DELETE /api/v1/users/:Iid
// @access  Private/admin
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.status(StatusCodes.OK).json({ message: 'Success! User removed.' });
  } else {
    throw new CustomError.CustomAPIError('Something wrong. Please try again.');
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  userUpdateProfile,
  deleteUser,
};
