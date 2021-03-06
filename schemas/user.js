const { gql } = require('apollo-server');

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    birthdate: String!
    sign: String!
    email: String!
    dateJoined: String!
    personalCard: String!
    personalNumber: String!
    personalCardBack: String!
  }
`;

module.exports = userSchema;
