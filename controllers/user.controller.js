const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
require('dotenv').config();

//register user and get token
const createUser = async (req, res) => {
  console.log(req.body);
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(409).send({
      message:
        'That email is already in use. Please sign in instead of registering.',
    });
  }

  try {
    const hashed = await bcrypt.hash(req.body.password, 15);
    const user = new User({
      ...req.body,
      password: hashed,
    });
    const { id } = await user.save();
    const authToken = jwt.sign({ id }, JWT_SECRET);
    res.status(200).send({ user, authToken });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully create user. See following problems: ${error}`,
    });
  }
};

//login user with token
const logInUser = async (req, res) => {
  console.log('trying to log in');
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .send('No user found for that email. Please register.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send('Incorrect password. Please try again.');
    }

    const authToken = jwt.sign(user.id, JWT_SECRET);
    return res.status(200).send({ user, authToken });
  } catch (err) {
    res
      .status(500)
      .send('Server error. Please check your internet connection.');
  }
};

module.exports = { createUser, logInUser };
