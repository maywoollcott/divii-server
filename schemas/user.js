const { gql } = require('apollo-server');

const userSchema = gql`
  type Query {
    getAllUsers: [User]
  }

  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    birthdate: String!
    sign: String!
    avatar: String
    email: String!
    dateJoined: String!
  }
`;

module.exports = userSchema;
