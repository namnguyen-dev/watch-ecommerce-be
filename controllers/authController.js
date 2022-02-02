const registerUser = async (req, res) => {
  res.send('registerUser');
};

const loginUser = async (req, res) => {
  res.send('loginUser');
};
const logoutUser = async (req, res) => {
  res.send('logoutUser');
};

module.exports = { registerUser, loginUser, logoutUser };
