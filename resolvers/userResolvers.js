const User = require('../models/user.model');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await User.find();
      console.log(users);
      return users;
    },
  },
};

module.exports = resolvers;
