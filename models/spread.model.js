const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpreadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  generalDescription: {
    type: String,
    required: true,
  },
  numberOfCards: {
    type: Number,
    required: true,
  },
  spreadNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Spread', SpreadSchema);
