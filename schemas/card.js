const { gql } = require('apollo-server');

const cardSchema = gql`
  type Card {
    id: ID!
    name: String!
    image: String
    suit: String
    uprightDescription: String!
    upsideDownDescription: String!
  }
`;

module.exports = cardSchema;
