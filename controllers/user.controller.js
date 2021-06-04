const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    return res
      .status(409)
      .send({ message: 'That username is taken. Please choose another.' });
  }
  if (req.body.password.length < 6) {
    return res
      .status(409)
      .send({ message: 'Password must be at least 6 characters.' });
  }
  try {
    const hashed = await bcrypt.hash(req.body.password, 15);
    const user = new User({
      ...req.body,
      password: hashed,
      sign: 'Taurus', //TODO: astrological sign logic
      dateJoined: Date.now().toString(), //this will be calced on the client
    });
    const { id } = await user.save();
    const authToken = jwt.sign({ id }, JWT_SECRET);
    res.status(200).send({ user, authToken });
  } catch (error) {
    res
      .status(500)
      .send({
        error,
        message: `Could not successfully create user. See following problems: ${error}`,
      });
  }
};

module.exports = { createUser };
