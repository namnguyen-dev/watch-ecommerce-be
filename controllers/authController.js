const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
  res.status(StatusCodes.CREATED).json({ user });
};

const loginUser = async (req, res) => {
  res.send('loginUser');
};
const logoutUser = async (req, res) => {
  res.send('logoutUser');
};

module.exports = { registerUser, loginUser, logoutUser };
