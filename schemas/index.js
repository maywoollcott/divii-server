const userSchema = require('./user');
const cardSchema = require('./card');
const readingSchema = require('./reading');

const queries = `
  type Query {
    getCardByNumber(deckNumber: Int): Card
    getCards: [Card]
    getAllUsers: [User]
  }
`;

module.exports = [userSchema, cardSchema, readingSchema, queries];
