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
    required: true,
  },
  generalDescription: {
    type: String,
    required: true,
  },
  uprightDescription: {
    type: String,
    required: true,
  },
  reversedDescription: {
    type: String,
    required: true,
  },
  uprightKeyTerms: {
    type: [String],
    required: true,
  },
  reversedKeyTerms: {
    type: [String],
    required: true,
  },
  arcana: {
    type: String,
    required: true,
  },
  deckNumber: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
  },
});

module.exports = mongoose.model('Card', CardSchema);
