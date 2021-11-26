const { gql } = require('apollo-server');

const cardSchema = gql`
  type Card {
    id: ID!
    name: String!
    image: String
    suit: String!
    generalDescription: String!
    uprightDescription: String!
    reversedDescription: String!
    uprightKeyTerms: [String]!
    reversedKeyTerms: [String]!
    arcana: String!
    deckNumber: Int!
    number: Int
  }
`;

module.exports = cardSchema;
