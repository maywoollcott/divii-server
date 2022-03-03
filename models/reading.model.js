const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadingSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  spread: {
    type: String,
    required: true,
  },
  spreadNumber: {
    type: String,
    required: true,
  },
  cards: [
    {
      deckNumber: {
        type: Number,
        required: true,
      },
      upright: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Reading', ReadingSchema);
