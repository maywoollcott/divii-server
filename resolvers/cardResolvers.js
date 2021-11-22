const Card = require('../models/card.model');

const resolvers = {
  Query: {
    getCardByNumber: async (parent, args, context, info) => {
      const card = await Card.findOne({ deckNumber: args.deckNumber });
      return card;
    },
    getCards: async () => {
      const cards = await Card.find();
      console.log(cards);
      return cards;
    },
  },
};

module.exports = resolvers;
