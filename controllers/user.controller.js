const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
require('dotenv').config();

//register user and get token
const createUser = async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(409).send('That email is already in use. Please sign in instead of registering.');
  }

  try {
    const hashed = await bcrypt.hash(req.body.password, 15);
    const newUser = new User({
      ...req.body,
      password: hashed,
    });
    const user = await newUser.save();
    const authToken = jwt.sign(user.id, JWT_SECRET);
    return res.status(200).send({ user, authToken });
  } catch (error) {
    res.status(500).send('Server error. Please check your internet connection');
  }
};

//login user with token
const logInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(409).send('No user found for that email. Please register.');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send('Incorrect password. Please try again.');
    }

    const authToken = jwt.sign(user.id, JWT_SECRET);
    return res.status(200).send({ user, authToken });
  } catch (err) {
    res.status(500).send('Server error. Please check your internet connection.');
  }
};

const getUserByToken = async (req, res) => {
  const { token } = req.body;

  const tokenId = jwt.verify(token, JWT_SECRET);
  try {
    let user = await User.findOne({ _id: tokenId });
    if (!user) {
      return res.status(409).send('Cannot find user. Please try logging in again.');
    }

    return res.status(200).send({ user });
  } catch (err) {
    res.status(500).send('Server error. Please check your internet connection.');
  }
};

const updateUser = async (req, res) => {
  const { email, updateObject } = req.body;

  if (updateObject.email) {
    const existingUser = await User.findOne({ email: updateObject.email });
    if (existingUser) {
      return res.status(409).send({
        message: 'That email is already in use. Please enter an unused email address.',
      });
    }
  }

  if (updateObject.password) {
    updateObject.password = await bcrypt.hash(updateObject.password, 15);
  }

  try {
    const updatedUser = await User.findOneAndUpdate({ email: email }, { $set: updateObject }, { new: true });
    res.status(200).send({ updatedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { createUser, logInUser, getUserByToken, updateUser };
