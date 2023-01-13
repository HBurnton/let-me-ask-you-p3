const { 
  Category, 
  User, 
  Question, 
  Answer 
} = require('../models');

const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find({});
    },
    users: async () => {
      return await User.find({})
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    }
  }
};

module.exports = resolvers;
