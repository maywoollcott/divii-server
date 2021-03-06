const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
  },
  personalCard: {
    type: String,
  },
  personalNumber: {
    type: String,
  },
  personalCardBack: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
