const User = require('../models/user.model');

const createUser = async (req, res) => {
  const newUser = new User({ ...req.body, dateJoined: Date.now() });
  await newUser.save();
  console.log(newUser);
  return newUser;
};

module.exports = { createUser };
