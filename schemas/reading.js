const { gql } = require('apollo-server');

const readerSchema = gql`
  type Reading {
    id: ID!
    timestamp: String!
    name: String!
    userId: ID!
    spread: String!
    cards: [String]
    description: String
  }
`;

module.exports = readerSchema;
