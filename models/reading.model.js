const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReadingSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  name: {
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
  cards: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
});

module.exports = mongoose.model('User', ReadingSchema);
