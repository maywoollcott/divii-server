const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  suit: {
    type: String,
  },
  uprightDescription: {
    type: String,
    required: true,
  },
  upsideDownDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Card', CardSchema);
